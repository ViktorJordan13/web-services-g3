const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

const config = require("./pkg/config");
require("./pkg/db");

const{ 
    login,
    register,
    refreshToken,
    resetPassword 
} = require ("./handlers/auth");

const api = express();

api.use(express.json());

api.use(
    jwt({
        secret: config.getSection("development").jwt,
        algorithms: ["HS256"],
    }).unless({
        path: [
            "/api/v1/auth/login",
            "/api/v1/auth/register",
            "/api/v1/auth/refreshToken",
            "/api/v1/auth/resetPassword"
        ],
    })
)

api.post("/api/v1/auth/login", login);
api.post("/api/v1/auth/register", register);
api.post("/api/v1/auth/refreshToken", refreshToken);
api.post("/api/v1/auth/resetPassword", resetPassword);

api.listen(config.getSection("development").port, (err) => {
    err 
        ? console.error(err)
        : console.log(
            `Server started at port ${config.getSection("development").port}`
        );
});