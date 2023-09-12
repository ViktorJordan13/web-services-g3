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
