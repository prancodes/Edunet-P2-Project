const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRouter = require('./routes/user');
require('./db/mongoose');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(userRouter);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
