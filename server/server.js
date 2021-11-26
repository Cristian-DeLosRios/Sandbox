const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/build', express.static(path.join(__dirname, '../build')));

app.get('/', express.static(path.join(__dirname, '../client')));

//serve static files


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
  