require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const db = require("./models");
// const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

//Sync Database
db.sequelize.sync().then(function () {

    console.log('Nice! Database looks fine')

}).catch(function (err) {

    console.log(err, "Something went wrong with the Database Update!")

});

app.listen(PORT, function () {
    console.log(`Server now listening on PORT ${PORT}!`);
});



module.exports = app;