require ("dotenv").config();
const express = require ("express");
const port = +process.env.port || 3000;

const indexRouter = require("./routes");

app.use(express.json());

app.use("./", indexRouter);

app.use(express.json());

app.use((err, req, res, next) => {

    err = err ? err.toString() : "something is wrong";
    res.status(500).json({data: "", msg: err});
});



app.listen(port, () => {
    console.log(`app is running on port:` ${port});

})