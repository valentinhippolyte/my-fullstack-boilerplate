const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/auth");
const { register, login, getMe } = require("../controllers/authController");

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Get new route
// router.get("/newRoute", verifyToken, function);

module.exports = router;
