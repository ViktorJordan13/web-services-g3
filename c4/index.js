const express = require("express");
const config = require("./pkg/config");
require("./pkg/db");

const api = express();

api.use(express.json());

api.listen(config.getSection("development").port, (err) => {
    err 
        ? console.error(err)
        : console.log(
            `Server started at port ${config.getSection("development").port}`
        );
});