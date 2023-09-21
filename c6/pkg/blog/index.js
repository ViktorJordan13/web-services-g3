const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    //_id vi e auto generirano pri kreiranje zapis
    title: String,
    content: String,
    account_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "accounts"
    },
})

const Blog = mongoose.model("blogs", blogSchema, "blogs");

//Task:
//Finish these functions during the break

const getAll = async() => {

};

const getOne = async() => {

};

const create = async() => {

};

const update = async() => {

};

const remove = async() => {

};