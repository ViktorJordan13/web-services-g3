const fs = require("fs");

const makeId = require("../pkg/strings");

// 1 byte = 8 bits
// 1 KB = 1024 bytes
// 1 MB = 1024 KB
// 1 GB = 1024 MB

const MAX_FILEZISE = 1048576; // 1024 * 1024 bytes = 1 MB

const ALLOWED_FILETYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/pjpeg"
];

const upload = (req, res) => {
    //req.files -> contains files
    if(MAX_FILEZISE < req.files.document.size){
        return res.status(400).send("File exceeds max file size!");
    }
    if(!ALLOWED_FILETYPES.includes(req.files.document.mimetype)){
        return res.status(400).send("File type is not allowed!")
    }

    const userDir = `user_${req.auth.id}`; // vnatre vo uploads folderot
    const userDirPath = `${__dirname}/../uploads/${userDir}`; // patekata do toj folder na korisnikot

    if(!fs.existsSync(userDirPath)){
        //dokolku ne postoi toj folder na korisnikot
        fs.mkdirSync(userDirPath); //kreiraj go
    }

    const fileName = `${makeId(10)}_${req.files.document.name}`;
    const filePath = `${userDirPath}/${fileName}`;
    //filePath = uploads/user_1234567890/Random.jpeg

    req.files.document.mv(filePath, (err) => {
        if(err){
            return res.status(500).send("Internal Server Error");
        }
        return res.status(200).send({file_name: fileName});
    });
};

const download = async (req, res) => {
    const userDir = `user_${req.auth.id}`;
    const userDirPath = `${__dirname}/../uploads/${userDir}`;
    const filePath = `${userDirPath}/${req.params.filename}`;

    if(!fs.existsSync(filePath)){
        return res.status(404).send("File not found");
    }
    res.download(filePath);
}

const listFiles = async (req, res) => {
    // od koj direktorium sakam da procitam
    // Ako direktoriumot ima fajlovi izlistaj gi
    // dali userDir postoi
    // dali userDirPath postoi -> dokolku ne korisnikot nema uploads

    const userDir = `user_${req.auth.id}`;
    const userDirPath = `${__dirname}/../uploads/${userDir}`;

    if(!fs.existsSync(userDirPath)){
        return res.status(400).send("You don't have any uploads yet");
    }

    const files = fs.readdirSync(userDirPath);
    return res.status(200).send(files);
    
}

const removeFile = async (req, res) => {
    const userDir = `user_${req.auth.id}`;
    const userDirPath = `${__dirname}/../uploads/${userDir}`;
    const fileName = req.params.filename;

    if(!fs.existsSync(`${userDirPath}/${fileName}`)){
        return res.status(404).send ("File already deleted!");
    }    
    const filesInDir = fs.readdirSync(userDirPath);

    try{
        fs.unlinkSync(`${userDirPath}/${fileName}`);
        console.log("File has been deleted");
    }catch(err){
        console.error("Error deleting file:", err);
    }

    if (filesInDir.length === 1){
        fs.rmdirSync(userDirPath);
    }

    res.status(200).send({ msg: "Deleted a file", deletedFile: fileName});
};

module.exports = {
    upload,
    download,
    listFiles,
    removeFile
}