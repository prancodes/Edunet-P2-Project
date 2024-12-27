const Transaction = require("../models/Transaction");

// Fetch transaction history
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id });
    res.json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Record a new transaction
exports.addTransaction = async (req, res) => {
  try {
    const { amount } = req.body;
    const transaction = await Transaction.create({
      userId: req.user._id,
      amount,
      status: "Success",
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
