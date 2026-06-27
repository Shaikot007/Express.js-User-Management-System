const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.put("/make-admin/:id", adminController.makeAdmin);
router.put('/remove-admin/:id', adminController.removeAdmin);

module.exports = router;