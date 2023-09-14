//TASK
//Probajte lokalnite CRUD funkcii sto rabotea so readFile i writeFile so JSON fajl, probajte za istite
//da napravite schema, i crud funkcii sto ke rabotat za MongoDB (so mongoose)
const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
        minLenght: 2
    },
    brand: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        validate: {
            validator: (fieldParam) => fieldParam > 2010,
            message: (props) => `Input car is older than 2010!`,
        },
    },
    carWeight: {
        type: Number,
        min: 1200,
        max: 3000
    },
    createdAt: {
        immutable: true,
        type: Date,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
});

const Car = mongoose.model("Cars", carSchema, "cars");

const addCar = async(car) => {
    const newCar = new Car(car);
    return await newCar.save();
};

const removeCar = async (id) => {
    return await Car.deleteOne({ _id: id });
};

const updateCar = async (id, newCarData) => {
    return await Car.updateOne ({ _id: id}, newCarData);
    //...stariPodatoci
    //sakate da zapisete novi podatoci ...noviPodatoci
    //novite podatoci ke se dodadat,
    //ako imate novi podatoci sto se so isto ime na poleto kako starite, novite podatoci ke gi prezapisat vrednostite na starite
};

const getAllCars = async() => {
    return await Car.find({});
};

const getCarById = async(id) => {
    return await Car.findOne({ _id: id });
}

module.exports = {
    addCar,
    removeCar,
    updateCar,
    getAllCars,
    getCarById
}