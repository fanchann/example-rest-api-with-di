const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/routes');

const app = express();

// middleware
app.use(bodyParser.json());

// routes
app.use('/api', userRoutes);

// err handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

// start the server
const APP_PORT = process.env.APP_PORT;
app.listen(APP_PORT, () => {
  console.log(`Server is running on http://localhost:${APP_PORT}`);
});
