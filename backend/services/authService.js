const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

class AuthService {
  async register(email, password) {
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    return { message: "User created" };
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return { email, token };
  }
}

module.exports = new AuthService();
