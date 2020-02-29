const bodyParser = require('body-parser');
const express = require('express');
const feedRoutes = require('./routes/feed');
const app = express();

app.use(bodyParser.json());
app.use( ( req, res, nex ) => { // set headers
  res,setHeader('Access-Control_Allow_Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
});
app.use('/feed', feedRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => ( console.log(`NodeJS Server running on Port: ${PORT}`)))
