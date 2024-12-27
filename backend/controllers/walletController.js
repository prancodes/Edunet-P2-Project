const Wallet = require("../models/Wallet");

// Fetch wallet balance
exports.getBalance = async (req, res) => {
  try {
    const wallet = await Wallet.findById(req.user.walletId);
    res.json({ balance: wallet.balance });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update wallet balance
exports.updateBalance = async (req, res) => {
  try {
    const { amount } = req.body;
    const wallet = await Wallet.findById(req.user.walletId);

    if (wallet.balance + amount < 0) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    wallet.balance += amount;
    await wallet.save();
    res.json({ balance: wallet.balance });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
