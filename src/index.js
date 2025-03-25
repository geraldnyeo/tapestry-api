const express = require('express');
const cors = require('cors');

const port = process.env.port || 3000;
const app = express();
app.use(cors());

app.get('/', (req, res) =>  {
    res.send("Server is up and running!")
});

app.listen(port, () => {
    console.log("Listening on port 80...");
});

module.exports = app;