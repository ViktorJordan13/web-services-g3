const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
    AccountLogin,
    AccountSignUp,
    AccountReset,
    validate
} = require("../pkg/accounts/validate");

const accounts = require("../pkg/accounts");
const config = require("../pkg/config")

const register = async(req, res) =>{
    try{
        await validate(req.body, AccountSignUp);
        const exists = await accounts.getByEmail(req.body.email);
        if(exists){
            return res.status(400).send("Account with this email already exists!");
        }
        //console.log("req.body.password", req.body.password); // plain text ako e 123 ke ni go prikaze kako 123
        req.body.password = bcrypt.hashSync(req.body.password);
        //console.log("req.body.password", req.body.password); // hashed, enkriptiran password
        const acc = await accounts.create(req.body);
        return res.status(201).send(acc);
    }catch(err){
        console.log(err);
        return res.status(err.status).send(err.error);
    }
}

const login = async (req, res) => {
    try{
        await validate(req.body, AccountLogin);

        const {email, password} = req.body;

        const account = await accounts.getByEmail(email);

        if (!account){
            return res.status(400).send("Account not found!");
        }

        if(!bcrypt.compareSync(password, account.password)){
            return res.status(400).send("Incorect password!");
        }

        const payload = {
            fullname: account.fullname,
            email: account.email,
            id: account._id,
            exp: new Date().getTime() / 1000 + 7 * 24 * 60 * 60, //7 days in the future
        };
        const token = jwt.sign(payload, config.getSection("development").jwt);
        return res.status(200).send(token);

    }catch(err){
        console.log(err);
        return res.status(err.status).send(err.error);
    }
}

const refreshToken = async (req, res) => {
    //req.body -> {"email": test1@email.com}
    //req.params -> :id
    //req.auth - express-jwt with jsonwebtoken sharing secret
    //req.query - ?123

    const payload = {
        ...req.auth,
        exp: new Date().getTime() / 1000 + 7 * 24 *60 * 60,
    };
    const token = jwt.sign(payload, config.getSection("development").jwt);
    return res.status(200).send(token);
}

const forgotPassword = async (req, res) => {
    //mailgun
}

const resetPassword = async(req, res) => {
    await validate(req.body, AccountReset);
    const {email, old_password, new_password} = req.body;

    const userAccount = await accounts.getByEmail(email); //test1@gmail.com

    if(!bcrypt.compareSync(old_password, userAccount.password)){
        return res.status(400).send("Incorect password!");
    }

    const newPasswordHashed = bcrypt.hashSync(new_password);

    if(old_password === new_password){
        return res.status(400).send("New password cannot be old password!");
    }

    const passwordChanged = await accounts.setNewPassword(
        userAccount._id.toString(),
        newPasswordHashed
    );

    return res.status(200).send(passwordChanged);
}

module.exports = {
    login,
    register,
    refreshToken,
    resetPassword
}