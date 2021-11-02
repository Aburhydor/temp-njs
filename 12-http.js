const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('You are Highly welcome to this page');
  }
  if (req.url === '/about') {
    res.end('Thank you');
  }

  res.end(`
  <h1>opp!!!</h1>
  <p>page doesnt exist</p>
  <a href="/">back home</a>
  `);
});
server.listen(5000);
