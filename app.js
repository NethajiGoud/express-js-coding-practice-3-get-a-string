const express = require("express");
const app = express();

const a = app.get("/", (request, response) => {
  response.send("Express JS");
});

app.listen(3000);

module.exports = a;
