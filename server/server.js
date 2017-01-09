const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});


const PORT = process.env.NODE_ENV === 'prod' ? 80 : 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
