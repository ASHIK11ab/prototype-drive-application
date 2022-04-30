const express = require('express');

const app = express();

// Serve css and js files as static.
app.use(express.static(__dirname + "/src"));

// Run the application on port 8080.
app.listen(8080, () => {
  console.log('* Application Started.');
  console.log('* Running on port: 8080')
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/templates/index.html");
});


app.get('/login', (req, res) => {
  res.sendFile(__dirname + "/templates/login.html");
});


app.get('/register', (req, res) => {
  res.sendFile(__dirname + "/templates/register.html");
});