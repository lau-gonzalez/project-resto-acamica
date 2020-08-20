require('dotenv').config();
const express = require('express');
const morgan = require('morgan')

const app = express();

// importing routes

const users = require('./src/routes/users');
const orders = require('./src/routes/orders');
const products = require('./src/routes/products');

const port = process.env.PORT;

// MIDDLEWARES

app.use(express.json())
app.use(morgan('dev'))

// ROUTES

// User Routes

app.use('/users', users);

// Order Routes

app.use('/orders', orders);


// Products Routes

app.use('/products', products);

app.listen(port, () => {
  console.log(`Server on port ${port}...`);
});
