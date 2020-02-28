const express = require('express');
const feedRoutes = require('./routes/feed');
const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => ( console.log(`NodeJS Server running on Port: ${PORT}`)))
