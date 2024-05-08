const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000;

const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

require('dotenv').config();
const testEnv = process.env.TEST_NUMBER

app.use(cors());

app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port} `)
})