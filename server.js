const express =  require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// API file for interacting with Git Server
const api = require('./routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// React DIST output folder
app.use(express.static(path.join(__dirname, 'client/dist')));

// API location
app.use('/api', api);


// Send all other requests to the React app
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server Started on ${port}`));