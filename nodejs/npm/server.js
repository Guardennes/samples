const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

app.use((request, _, next) => {
  const requestTime = new Date(Date.now()).toString();
  console.log(request.method, request.hostname, request.path, requestTime);
  next();
});

app.get('/', (request, response) => {
  response.send(`<!DOCTYPE html>
<html>
  <head>
    <title>Welcome to the C Confidential Application Deployment by Guardennes</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f0f0f0;
      }
      .container {
        text-align: center;
        margin-top: 50px;
      }
      .title {
        font-size: 24px;
        margin-bottom: 10px;
      }
      .subtitle {
        font-size: 16px;
        color: #555;
      }
      img {
        display: block;
        margin: 20px auto;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1 class="title">Welcome to the C Confidential Application Deployment by Guardennes</h1>
      <p class="subtitle">Your application is now up and running!</p>
      <img src="https://via.placeholder.com/200" alt="Company Logo">
    </div>
  </body>
</html>`);
});

app.get("/actuator/health", (request, response) => {
  response.json({ status: "UP" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
