const express = require('express')
const app = express()
const port = 8080;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  console.log('You got a request from the following ip ---> ' + req.socket.remoteAddress);
  res.send('Hola World 2.0!');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });