// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    // Authentication logic here
    // Check if user exists
    // const user = await User.findOne({ email });
    // if (!user) {
    //   return res.status(401).json({ message: "Invalid email or password" });
    // };

    // Compare password
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return res.status(401).json({ message: "Invalid email or password" });
    // };

    // Create and assign a token
    // const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

    // Return the successful message and the token
    // res.header("auth-token", token).status(200).json({
    //   message: "User login successful",
    //   token: token
    // });
    
    // Return a JSON success response
    return res.status(200).json({
      message: "User login successful"
    });
  } 
  catch (error) {
    return res.status(500).json({ 
      message: "Internal server error" 
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    // Clear the authentication cookie
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    // Return a JSON success response
    return res.status(200).json({
      success: true,
      message: "User logout successful",
    });
  } 
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error during logout",
    });
  }
};

const changePassword = async (req, res) => {
  try {
    // Extract values from request body
    // const { currentPassword, newPassword } = req.body;
    // const userId = req.user.id; 

    // Fetch user from database
    // const user = await User.findById(userId);
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // };

    // Verify current password
    // const isMatch = await bcrypt.compare(currentPassword, user.password);
    // if (!isMatch) {
    //   return res.status(400).json({ message: "Incorrect current password" });
    // };

    // Hash new password and save
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(newPassword, salt);
    // await user.save();

    // Return a JSON success response
    return res.status(200).json({ 
        message: "Password changed successfully" 
    });
  } 
  catch (error) {
    console.error(error);
    return res.status(500).json({ 
        message: "Internal server error" 
    });
  }
};

module.exports = {
  loginUser,
  logoutUser,
  changePassword
};