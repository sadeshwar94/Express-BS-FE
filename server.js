const express = require('express');
const app = express();
const port = 3000;

// Define the route to serve the HTML content
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>EC2 Instance Details</title>
      </head>
      <body>
        <h1>EC2 Instance Details</h1>
        <p>Instance ID: MH-TEST-FE-1A</p>
        <p>Server Name: Front End Server 01</p>
        <p>Subnet ID: (Public-subnet-1A)</p>
        <p>Version No : 0.1.1</p>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
