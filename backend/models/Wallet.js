const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
  balance: { type: Number, default: 10000 }, // Mock initial balance
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }],
});

module.exports = mongoose.model("Wallet", walletSchema);
