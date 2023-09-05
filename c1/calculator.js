// mnozenje, delenje, sobiranje, odzemanje

//a = 3
//b = 4
//a + b - celoto e operacija, a i b vi se operatori
//calculator(a, b, sobiranje) - sobiranje ovde vi e parametar, i a i b vi se parametri

function calculator(operacija, param1, param2){  //
    let result = 0;
    switch(operacija){
        case "sobiranje":
            // result = param1 + param2;
            // break;
            return param1 + param2;
        case "odzemanje":
            return param1 - param2;
        case "mnozenje":
            return param1 * param2;
        case "delenje":
            return param1 / param2;
        default: 
            "Not recognized operator";
    }
    //return result;
}

console.log(calculator("mnozenje", 2, 3));