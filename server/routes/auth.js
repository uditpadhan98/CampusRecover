const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const multer = require("multer");

const User = require("../models/User");

/* Configuration Multer for File Upload */
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/uploads/"); // Store uploaded files in the 'uploads' folder
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Use the original file name
//   },
// });

// const upload = multer({ storage });

/* USER REGISTER */
router.post("/register", async (req, res) => {
  try {
    /* Take all information from the form */
    const { username, email, password } = req.body;

    /* Check if user exists */
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists!" });
    }

    /* Hash the password */
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    /* Create a new User */
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    /* Save the new User */
    await newUser.save();

    /* Send a successful message */
    res
      .status(200)
      .json({ message: "User registered successfully!", user: newUser });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Registration failed!", error: err.message });
  }
});

/* USER LOGIN*/
router.post("/login", async (req, res) => {
  try {
    /* Take the information from the form */
    const { username, password } = req.body

    /* Check if user exists */
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(409).json({ message: "User doesn't exist!" });
    }

    /* Compare the password with the hashed password */
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials!"})
    }

    /* Generate JWT token */
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    delete user.password

    res.status(200).json({ token, user })

  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

module.exports = router