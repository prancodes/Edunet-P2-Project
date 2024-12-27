const User = require("../models/User");
const Wallet = require("../models/Wallet");
const jwt = require("jsonwebtoken");

// Sign up a new user
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Create a new wallet
    const wallet = await Wallet.create({});
    const user = await User.create({ username, email, password, walletId: wallet._id });

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Log in a user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, userId: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
