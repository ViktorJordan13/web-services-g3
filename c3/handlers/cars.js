const {
    addCar,
    getAllCars,
    getCarById,
    updateCar,
    removeCar
} = require("../pkg/cars");

// cars.js -> lokalni funkcii koi rabotat so podatocite od cars.json
// handleri (fajlot kade sto sme sega i go pisuvame ova) - tie gi koristat lokalnite funkcii
// od cars.js (tie sto gi importirame) za da manipuliraat so cars.json (preku req i res)
// bidejki gi pristapuvaat podatocite preku internet

//Task
// Podsetete se od Node.js i MongoDB modulite kako se pravea handlers(vo nekoi slucai koristevme MVC design patter, pa tamu ni bea controllers)
// i napravete gi slednive handler funkcii koi ke gi povikuvaat funciite koi gi importiravme od pkg/cars
// Napravete gi slednive funkcii: getAll, getById, create, update, remove
// exportirajte gi i importirajte gi vo glavniot vlez na aplikacijata index.js (tamu kade sto ke go definirame express) 

const getAll = async (req, res) => {
    try{
        const cars = await getAllCars();
        return res.status(200).send(cars);
    } catch(err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

const getById = async (req, res) => {
    try{
        const id = Number(req.params.id);
        const car = await getCarById(id);
        return res.status(200).send(car);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

const create = async (req, res) => {
    try{
        await addCar(req.body);
        return res.status(201).send(req.body);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

const update = async (req, res) => {
    try{
        const id = Number(req.params.id);
        await updateCar(id, req.body);
        return res.status(204).send("") // Success (OK) but no entity body - update existing document)
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }

}

const remove = async (req, res) => {
    try{
        const id = Number(req.params.id);
        await removeCar(id);
        return res.status(200).send("Car deleted!")
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}