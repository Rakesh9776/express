const express = require("express");


const app = express();


app.listen(5500, () => console.log("Server Up and running"));

app.get('/',(req, res) => {
        res.send('Hello World!');
        });
        app.set("view engine", "ejs");
        app.use(express.urlencoded({ extended: true }));
        app.post('/',(req, res) => {
                console.log(req.body);
                });



