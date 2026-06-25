// const User = require("../models/User");

const createUser = (req, res) => {
  try {
    const { name, email, password } = req.body;
    return res.status(201).json({
      success: true,
      message: "User created successfully"
    });
  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

const readUser = (req, res) => {
  try {
    return res.status(200).json({
      message: "User read successfully"
    });
  } 
  catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      error: error.message
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.body.id;
    const updatedData = req.body;
    await User.findByIdAndUpdate(userId, updatedData);
    return res.status(200).json({
      success: true,
      message: "User updated successfully"
    });
  } 
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error during update",
      error: error.message
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ 
        message: "User not found" 
      });
    }
    res.status(200).json({ 
      message: "User deleted successfully" 
    });
  } 
  catch (error) {
    res.status(500).json({ 
      message: "An error occurred", 
      error: error.message 
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}); 
    return res.status(200).json({
      success: true,
      message: "All users fetched successfully",
      data: users
    });
  } 
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching users",
      error: error.message
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ 
        message: "User not found" 
      });
    }
    res.status(200).json({ 
      message: "User fetched by ID",
      user 
    });
  } 
  catch (error) {
    res.status(500).json({ 
      message: "Server error", 
      error: error.message 
    });
  }
};

const loginUser = async (req, res) => {
  try {
    // Authentication logic here (e.g., checking credentials)
    
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

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
  loginUser
};