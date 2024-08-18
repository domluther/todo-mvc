// Libraries
const express = require('express');
const morgan = require('morgan');

// My own code
const connectDB = require('./config/database');
const homeRoutes = require('./routes/home');
const todoRoutes = require('./routes/todos');

// Consts
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the DB
connectDB();

// Set up middleware - view engine, logging, static folder, dealing with data
app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// What routes are there?
app.use('/', homeRoutes);
app.use('/todos', todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
