const express = require('express');
const got = require('got');
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.listen(3333, () => {
  console.log('🔥 Server is running - Port 3333');
});
