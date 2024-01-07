const router = require("express").Router();
const { familySignUp } = require("../controllers/familyCont"); // Fix import
const upload = require("../utilities/multer");

// Route for family signup with Multer middleware
router.post('/family/signup', upload.fields([
  { name: 'fatherPicture', maxCount: 1 },
  { name: 'motherPicture', maxCount: 1 },
  { name: 'childrenPictures', maxCount: 7 },
]), familySignUp); // Use familySignUp directly

module.exports = router;