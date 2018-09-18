const express =  require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// API file for interacting with MongoDB
const api = require('./routes/api');
const clientId = '';

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'client/dist')));

// API location
app.use('/api', api);


// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const port = 3000;

app.listen(port, () => console.log(`Server Started on ${port}`));