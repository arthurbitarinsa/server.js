// const fs = require('fs');
// const os = require('os');

// // Create the 'client' directory
// fs.mkdirSync('client');

// // Directories and files to create
// const structure = {
//     'client/index.html': '<h1>Home Page</h1><link rel="stylesheet" href="style.css">',
//     'client/style.css': 'body { background-color: #f0f0f0; }',
//     'client/contact/index.html': '<h1>Contact Page</h1><link rel="stylesheet" href="style.css">',
//     'client/contact/style.css': 'body { background-color: #ffcccc; }',
//     'client/about/index.html': '<h1>About Page</h1><link rel="stylesheet" href="style.css">',
//     'client/about/style.css': 'body { background-color: #ccffcc; }',
//     'client/blog/index.html': '<h1>Blog Page</h1><link rel="stylesheet" href="style.css">',
//     'client/blog/style.css': 'body { background-color: #ccccff; }',
//     'client/info.txt': `This is being run on a ${os.type()} computer!`,
// };

// // Create subdirectories and files
// for (const [path, content] of Object.entries(structure)) {
//     fs.mkdirSync(path.replace(/\/[^/]+$/, ''), { recursive: true });
//     fs.writeFileSync(path, content);
// }

// const http = require('http')
// const server = http.createServer()
// server.on("request", (request, response) => {
//     // Do something here
// })
// server.listen(3000, () => {
//     console.log("Server started on http://127.0.0.1:3000");
// })

// // The server object
// const server = http.createServer()

// // The event watcher
// server.on("request", (req, response) => {
//     console.log("A request has been submitted")
// })

// // The port listener
// server.listen(3000, () => {
//     console.log("Server started on http://127.0.0.1:3000");
// })

// The server object
// 

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   let filePath;

//   // Determine the file path based on the request URL
//   if (req.url === '/') {
//     filePath = path.join(__dirname, 'client', 'index.html');
//   } else {
//     filePath = path.join(__dirname, 'client', req.url, 'index.html');
//   }

//   // Read the HTML file
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       res.writeHead(404, { 'Content-Type': 'text/plain' });
//       res.end('404 Not Found');
//     } else {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(data);
//     }
//   });
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });



const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Determine the requested file path
  const requestedFilePath = path.join(__dirname, 'client', req.url === '/' ? 'index.html' : req.url, 'index.html');

  // Read the HTML file
  fs.readFile(requestedFilePath, 'utf8', (err, data) => {
    if (err) {
      // Handle error (e.g., file not found)
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      // Send HTML content as response
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
