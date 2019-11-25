const express = require("express");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, function () {
    console.log(`Server now listening on PORT ${PORT}!`);
});

module.exports = app;