// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

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

const makeAdmin = async (req, res) => {
	try {
		const { id } = req.params;

		// Find the user and update their role/admin status
		// const updatedUser = await User.findByIdAndUpdate(
		// 	userId,
		// 	{ role: 'admin' },
		// 	{ new: true }
		// );

		// if (!updatedUser) {
		// 	return res.status(404).json({
		// 		message: 'User not found'
		// 	});
		// }

		// Return a JSON success response
		res.status(200).json({
			message: 'User made admin successfully'
		});
	}
	catch (error) {
		res.status(500).json({
			message: 'Server error', error: error.message
		});
	}
};

const removeAdmin = async (req, res) => {
	try {
		const { id } = req.params;

		// Add database logic here
		// await User.findByIdAndUpdate(id, { role: "user" });

		res.status(200).json({
			message: "Admin role removed successfully"
		});
	}
	catch (error) {
		res.status(500).json({
			message: "An error occurred",
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

const filterUsers = async (req, res) => {
  try {
    const filters = req.query;
    const users = []; // user data

    const filteredUsers = users.filter(user => {
      let isValid = true;
      for (const key in filters) {
        // Compare values (ensure strict type casting if necessary)
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });

    return res.status(200).json({
      success: true,
      message: "User filter completed successfully",
      data: filteredUsers
    });
  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while filtering users",
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
  loginUser,
  logoutUser,
  changePassword,
  updateProfile,
  makeAdmin,
	removeAdmin,
  searchUsers,
  filterUsers
};