require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('./src/routes/user.route');
const taskRoutes = require('./src/routes/task.route');
const errorHandler = require('./src/middleware/errorHandler');


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.use(errorHandler);

module.exports = app;