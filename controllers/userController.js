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

const updateProfile = async (req, res) => {
  try {
    // Your logic to update the user goes here
    
    // Return success response
    return res.status(200).json({ 
      message: "User profile updated successfully" 
    });
  } 
  catch (error) {
    // Handle errors appropriately
    return res.status(500).json({ 
      message: "An error occurred while updating the profile", 
      error: error.message 
    });
  }
};

const searchUsers = async (req, res) => {
  try {
    // 1. Get the search term from the query string (e.g., /search?q=alice)
    const searchTerm = req.query.q || ''; 

    // 2. Query database (using Mongoose)
    const users = await User.find({
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { email: { $regex: searchTerm, $options: 'i' } }
      ]
    });

    // 3. Send the successful response with the user data
    res.status(200).json({
      success: true,
      message: "User search completed successfully",
      count: users.length,
      data: users // This returns the actual array of found users
    });
  } 
  catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred during the search",
      error: error.message
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
  updateProfile,
  searchUsers
};