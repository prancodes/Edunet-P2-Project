const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');

const router = new express.Router();

router.post('/signup', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.username, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
});

router.get('/balance', auth, async (req, res) => {
    res.send({ balance: req.user.balance });
});

router.post('/deposit', auth, async (req, res) => {
    const amount = req.body.amount;
    req.user.balance += amount;
    await req.user.save();
    res.send({ balance: req.user.balance });
});

router.post('/withdraw', auth, async (req, res) => {
    const amount = req.body.amount;
    if (req.user.balance < amount) {
        return res.status(400).send({ error: 'Insufficient balance' });
    }
    req.user.balance -= amount;
    await req.user.save();
    res.send({ balance: req.user.balance });
});

module.exports = router;
