import express from 'express'; // Use this if you're using ES modules
// const express = require('express'); // Use this line if you're using CommonJS

const app = express();
// Use the dynamic port provided by Render, or fallback to 3001 if not defined (for local testing)
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World! This is served by the Express server!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
