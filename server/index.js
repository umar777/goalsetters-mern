const dotenv = require('dotenv').config();
const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorMiddleware');

const PORT = process.env.PORT || 3000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/goals', require('./routes/goalRoutes'));

app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log("Server is running on port: " + PORT));

