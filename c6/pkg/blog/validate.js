const { Validator } = require("node-input-validator");

const BlogPOST = {
    title: "required|string",
    content: "requred|string",
}

const BlogPUT = {
    title: "string",
    content: "string"
}

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = v.check(); //v.check ke gi sporedi dvete polinja dali imaat isti klucevi
    if(!e){
        throw{
            code: 400,
            error: v.errors,
        };
    }
};

module.exports = {
    BlogPOST,
    BlogPUT,
    validate
}