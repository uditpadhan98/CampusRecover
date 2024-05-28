const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image:{
      type: Array,
      required: true,
    },
    propertyList: {
      type: Array,
      default: [],
    }
  },
  { timestamps: true }
)

const User = mongoose.model("User", UserSchema)
module.exports = User