const express = require("express");
const { getTransactions, addTransaction } = require("../controllers/transactionController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware);
router.get("/", getTransactions);
router.post("/add", addTransaction);

module.exports = router;
