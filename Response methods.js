const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'pug'); // Set the view engine to Pug

app.get('/download', (req, res) => {
  const file = path.join(__dirname, 'files', 'sample.pdf');
  res.download(file); // Set disposition and send it.
});

app.get('/end', (req, res) => {
  res.write('Hello, World!'); // Write response
  res.end(); // End the response
});

app.get('/json', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/jsonp', (req, res) => {
  res.jsonp({ message: 'Hello, World!' });
});

app.get('/redirect', (req, res) => {
  res.redirect('/json'); // Redirect to the /json route
});

app.get('/render', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/send', (req, res) => {
  res.send('Hello, World!'); // Send a plain text response
});

app.get('/sendfile', (req, res) => {
  const file = path.join(__dirname, 'files', 'sample.pdf');
  res.sendFile(file); // Send a file
});

app.get('/sendstatus', (req, res) => {
  res.sendStatus(404); // Send a 404 Not Found status with its string representation
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


Test the endpoints:

Open a browser and navigate to http://localhost:3000/download to download a file.
Open a browser and navigate to http://localhost:3000/end to see the response end.
Open a browser and navigate to http://localhost:3000/json to get a JSON response.
Open a browser and navigate to http://localhost:3000/jsonp to get a JSONP response.
Open a browser and navigate to http://localhost:3000/redirect to get redirected.
Open a browser and navigate to http://localhost:3000/render to see a rendered view.
Open a browser and navigate to http://localhost:3000/send to see a plain text response.
Open a browser and navigate to http://localhost:3000/sendfile to send a file.
Open a browser and navigate to http://localhost:3000/sendstatus to see a status code response.
