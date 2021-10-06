const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config({
    path: "./config.env",
});

config = {
    port: process.env.PORT || 5000,
    address: process.env.ADDRESS || "127.0.0.1",
}


const app = express();
app.use(express.json());
app.use(cors());

app.use(require("./routes/record"));


const dbo = require("./db/conn");


app.listen(config.port, () => {
    dbo.connectToServer(function (err) {
        if (err) {
            console.error(err); 
        }
    });


    console.log("Server is running on port: ", config.port);
});
