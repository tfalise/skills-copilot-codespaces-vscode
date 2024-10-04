// Create web server
// Create a web server that listens for requests and serves up a response for the path /comments. 
// When a GET request is made to the /comments path, the server should respond with an array of comments. 
// You can create your own array of comments to send back as the response.

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    const comments = ['Comment 1', 'Comment 2', 'Comment 3'];
    res.write(JSON.stringify(comments));
    res.end();
  } else {
    res.statusCode = 404;
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});