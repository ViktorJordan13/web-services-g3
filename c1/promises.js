//Asyncronous vs Synchronous
//fs.writeFile -> asinhrona funkcija, toa znaci deka ni dozvoluva da prodolzime so izvrsuvanjeto na kodot
//fs.writeFileSync -> ne odi na naredna linija se dodeka ne se zavrsi

// Promises in JavaScript are a way to handle asynchronous operations and manage their result

// Promise has 3 states:
// 1. fullfilled
// 2. rejected
// 3. pending

function performAsyncOperation(success) {
    return new Promise ((resolve, reject) => {
        if(success){
            resolve("Operacijata e uspesna!");
        }else{
            reject ("Operacijata e neuspesna!")
        }
    })
}

// Callbacks - ES5 - outdated najcesto zaradi callback hell sto se slucuva so niv
// Promises - ES6 - ok se, ama kompliciran e nacinot na koj se pisuvaat i se sozdava mnogu kod
// Async/await - ES7 - momentalno "najdobro" resenie

// successPromise
// .then((res) => console.log(res)) //Operation is succesfull
// .catch((error) => console.error(error)); // ova nema da se izvrsi vo uspesno Promise

// failedPromise
// .then((res) => console.log(res)) // ova nema da se izvrsilo
// .catch((error) => console.error(error)); // Operations has failed

async function main() {
    try{
        const successPromise = performAsyncOperation(true);
        const successResult = await successPromise; //bez await ke ni vrati samo Promise
        console.log("Result:", successResult);
        // successPromise -> performAsyncOperation(true) -> ke vrati nov promise koj e faten vo resolve
    }catch(err){
        console.log("Error", err);
    }

    try{
        const failedPromise = performAsyncOperation(false);
        const failedResult = await failedPromise; //bez await ke ni vrati samo Promise
        console.log("Result:", failedResult);

    }catch(err){
        console.log("Error", err);
    }

}

main();