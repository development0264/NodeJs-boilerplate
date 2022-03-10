// Imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const routes = require('./routes');

// Inits
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is up & running on port :: ', process.env.PORT || 5000);
});