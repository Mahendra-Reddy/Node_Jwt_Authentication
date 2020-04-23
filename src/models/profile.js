const mongoose = require("mongoose");

const Profile = mongoose.model("Profile", {
  phoneNumber: {
    type: String,
    required: true,
  },
  plotNo: {
    type: String,
    trim: true,
    lowercase: true,
  },
  address: {
    type: String,
    trim: true,
    lowercase: true,
  },
  pinCode: {
    type: String,
    trim: true,
    lowercase: true,
  },
  state: {
    type: String,
    trim: true,
    lowercase: true,
  },
  height: {
    type: String,
    trim: true,
  },
  weight: {
    type: String,
    trim: true,
    default: "100",
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = Profile;
