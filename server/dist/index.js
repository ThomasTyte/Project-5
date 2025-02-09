import express from 'express'; // Use this if you set "type": "module" in package.json
// const express = require('express'); // Use this line if you're using CommonJS

const app = express();
const PORT = 3001;
app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World! This is served by the Express server!'
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});