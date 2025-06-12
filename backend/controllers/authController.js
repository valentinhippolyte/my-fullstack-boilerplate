const authService = require("../services/authService");

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await authService.register(email, password);
    res.status(201).json(result);
  } catch (error) {
    if (error.message === "User already exists") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await authService.login(email, password);
    res.json(result);
  } catch (error) {
    if (
      error.message === "User not found" ||
      error.message === "Invalid credentials"
    ) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  register,
  login,
};
