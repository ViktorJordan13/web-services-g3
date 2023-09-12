// index.js (ovoj fajl kade sto go pisuvame ova) gi setirame rutite, i na tie ruti gi povikuvame handlerite
// handleri - komuniciraat so serverot i klientot
// pkg/cars - osnovni funkcii za avtomobili koi go manipuliraat cars.json fajlot
// pkg/files - gi koristime za citanje i zapisuvanje na novi podatoci vo cars.json

// pkg komunicira so handler
// handler komunicira so index.js (ovoj fajl kade sto ova e napisano i fajlot kade sto go definirame express)

const express = require("express");
const {
    getAll,
    getById,
    create,
    update,
    remove
} = require("./handlers/cars");

const api = express();

api.use(express.json());

//GET
api.get("/cars", getAll);
api.get("/cars/:id", getById);
//POST
api.post("/cars", create);
//PUT
//za ovaa logika nema da ni treba put, ke koristime patch
//PATCH
api.patch("/cars/:id", update);
//DELETE
api.delete("/cars/:id", remove)

api.listen(10000, (err) => {
    err ? console.error(err) : console.log("Server started at port 10000!");
})