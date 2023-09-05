//Global scope
//primer: var

// Local scope - function

function greet(){
    let test = "i am a test";
}

console.log("test", test);

//Block scope {}
if(true){
    //block
}

for(let i = 0; i < 10; i++){
    //block
}

switch (
    "test"
    //block
){

}