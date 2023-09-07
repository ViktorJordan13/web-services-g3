const fs = require("fs");

//read file
const readData = (source) => {
    return new Promise((success, fail) => {
        fs.readFile(`${source}.json`, "utf-8", (err, data) => {
            if(err) return fail(err);
            const out = JSON.parse(data);
            return success(out);
        });
    });
};

//write file

const writeData = (data, destination) => {
    return new Promise((success, fail) => {
        const out = JSON.stringify(data);
        fs.writeFile(`${destination}.json`, out, (err) => {
            if(err) return fail(err);
            return success();
        });
    });
};

//Primer za REST Resource - vo JSON
//persons.json - tuka se zacuvuvaat
//person
//{
    //id
    //firstName
    //lastName
//}

//Task:
//Potsetete se od Node.js i so koristenje na ovie readData i writeData,
//probajte da napravite ednostaven CRUD vrz osnova na resursot person
//Napravete asinhroni funkcii (async-await(so try and catch)):
//1.addPerson 
//2.updatePerson
//3.removePerson

const addPerson = async(id, firstName, lastName) => {
    try{
        const person = {
            id: id,
            firstName: firstName,
            lastName: lastName
        };
        let data = await readData("./persons");
        data.push(person);
        await writeData(data, "./persons");
    }catch(err){
        throw err;
    }
};



const updatePerson = async (id, newPersonData) => {
    try{
        let data = await readData("./persons");
        const person = data.find((person) => person.id == id);
        const newPerson = {
            //spread operatorot (...) raboti kako append, ne pravi overwrite, samo dodava/zamenuva
            ...person,
            // id: 1
            // firstName: "Pero"
            // lastName: "Perovski"
            ...newPersonData
            // firstName: "Mile"
        };
        data = data.filter((person) => person.id != id); //bez covekot koj probuvame da go azurirame
        data.push(newPerson);
        await writeData(data, "./persons");
    }catch(err){
        throw err;
    }
};

const removePerson = async (id) => {
    try {
        const data = await readData("./persons");
        const out = data.filter((person) => person.id !== id);
        await writeData(out, "./persons");
    }catch(err){
        throw err;
    }
}

(async function (){
    await removePerson(3);
})();

//Task napravete go istovo (istite metodi koristete gi)
//za JSON resurs cars.json
//car {
// id
// manufacturer
// model
// }
//BONUS povikajte gi so vistinska funkcija, bez IIFE