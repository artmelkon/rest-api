const bodyParser = require('body-parser');
const express = require('express');
const feedRoutes = require('./routes/feed');
const app = express();

app.use(bodyParser.json()); // application/json

app.use( ( req, res, next ) => { // set headers before sending it out
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,PATCH,DELETE');  // OPTIONS is optional
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/feed', feedRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => ( console.log(`NodeJS Server running on Port: ${PORT}`)))
