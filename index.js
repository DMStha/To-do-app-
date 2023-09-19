require ("dotenv").config();
const express = require ("express");
const mongoose = require("mongoose");


const app = express();
const indexRouter = require("./routes");

const port = +process.env.port || 3000;

const DB_URL = process.env.DB_URL || "mongodb://127.0.1:27010/test";

mongoose.connect(DB_URL).then( () => {
    console.log("Database Connected");
})

app.use(express.json());

app.use("./", indexRouter);

app.use(express.json());

app.use((err, req, res, next) => {

    err = err ? err.toString() : "something is wrong";
    res.status(500).json({data: "", msg: err});
});



app.listen(port, () => {
    console.log(`app is running on port: ${port}`);


});
