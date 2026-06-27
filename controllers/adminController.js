// const User = require('../models/User');

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

module.exports = {
	makeAdmin,
	removeAdmin
};