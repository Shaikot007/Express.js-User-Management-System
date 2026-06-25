const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/create-user", userController.createUser);
router.get("/read-user", userController.readUser);
router.put("/update-user", userController.updateUser);
router.put("/delete-user", userController.updateUser);
router.get("/all-users", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);
router.put("/update-profile", userController.updateProfile);

module.exports = router;