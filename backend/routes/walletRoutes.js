const express = require("express");
const { getBalance, updateBalance } = require("../controllers/walletController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware);
router.get("/", getBalance);
router.post("/update", updateBalance);

module.exports = router;
