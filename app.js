const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the home page");
});

let PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log("Started at port 3000");
});
