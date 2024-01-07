const familyModel = require('../models/familyModel.js');
const multer = require('multer');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
    

  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Limit file size to 5MB
  },
});

exports.familySignUp = async (req, res) => {
  try {
    const { fatherName, motherName } = req.body;
    const fatherPicture = req.files.find((file) => file.fieldname === 'fatherPicture');
    const motherPicture = req.files.find((file) => file.fieldname === 'motherPicture');
    const childrenPictures = req.files.filter((file) => file.fieldname === 'childrenPictures');

    const family = await familyModel.create({
      fatherName,
      motherName,
      fatherPicture: fatherPicture ? fatherPicture.filename : null,
      motherPicture: motherPicture ? motherPicture.filename : null,
      childrenPictures: childrenPictures.map((file) => file.filename),
    });

    if (!family) {
      return res.status(400).json({
        message: 'Unable to sign up the family',
      });
    } else {
      res.status(201).json({
        message: 'Successfully signed up the family',
        data: family,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

