// user_{myidinMongo1234}/666662222.jpg

//makeId(10)

// 3.6 => Math.floor => 3 
// 3.6 => Math.ceil => 4

const makeId = (lenght) => {
    let result = "";
    let characters = "ABCDEFGIHJKLMNOPQRSTUVWXYZabcdefgeghijklmnopqrstuvwxyz01234567890";//52 karakteri
    let charLength = characters.length;

    for (let i = 0; i <lenght; i ++){
        result += characters.charAt(Math.floor(Math.random() * charLength));
    }

    return result;
};

module.exports = makeId;