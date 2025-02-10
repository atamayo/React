function greet(userName, message = "") {
    console.log("Hola, Yo soy " + userName + ". " + message)
}

function handleTimeOut() {
    console.log("Time out!");
}

const hangleTimeOut2 = () => {
    console.log("Time out ... again!");
}

function init() {

    const message = "Hi, function inside of function";

    function greet() {
        console.log(message);
    }

    greet();
}

export function demoFunctions() {

    console.log("*** FUNCTION EXAMPLES ***")

    setTimeout(handleTimeOut, 1000);
    setTimeout(hangleTimeOut2, 2000);
    setTimeout(() => { console.log("More timing out...") }, 3000);

    greet("Alex");
    greet("Max", "Que tal?");
    init();
}