const express = require('express');
const cors = require('cors');
const app = express();
const myRoute = require('./routes/route');
const { startNewsCron } = require('./cronjobs/cronJob');

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api/v1/', myRoute);
startNewsCron();


app.listen(4000, () => {
  console.log('Server is running on port 4000');
});