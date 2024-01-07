const mongoose = require("mongoose");

const familySchema = new mongoose.Schema({
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  fatherPicture: {
    type: String, // Assuming the filename will be stored
  },
  motherPicture: {
    type: String, // Assuming the filename will be stored
  },
  childrenPictures: {
    type: Array,
    default: [],
  },
}, { timestamps: true });

const familyModel = mongoose.model("familyone", familySchema);

module.exports = familyModel;