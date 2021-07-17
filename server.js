const express = require('express');
const got = require('got');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(
  cors({
    origin: '*',
  })
);

const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/api', async (request, response) => {
  try {
    const res = await got('https://api.deezer.com/chart');
    response.send(res.body);
  } catch (error) {
    console.log(error);
    //=> 'Internal server error ...'
  }
});

app.get('/api/album/:albumId', async (request, response) => {
  const { albumId } = request.params;
  try {
    const res = await got(`https://api.deezer.com/album/${albumId}`);
    response.send(res.body);
  } catch (error) {
    console.log(error);
    //=> 'Internal server error ...'
  }
});

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log('🔥 Server is running - Port 3333');
});
