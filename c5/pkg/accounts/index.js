const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
    email: String,
    password: String,
    fullname: String
});

const Account = mongoose.model("accounts", accountSchema);

//Task:
//try to finish these functions for database operations in MongoDB

const create = async(account) => {

};

const update = async(id, newData) => {

};

const remove = async (id) => {

};

const getById = async(id) => {
    
};

const getByEmail = async(email) => {

};

const getAll = async () => {

}