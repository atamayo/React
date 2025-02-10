const hobbies = ["Sports", "Music", "Gaming"];


export function demoArray() {

    console.log("*** ARRAY EXAMPLES ***")

    console.log(10.1 <= 11 ? 'Verdadero' : 'Falso');

    hobbies.push("Reading");
    hobbies.pop()

    console.log("Sports is at index: " + hobbies.findIndex((item) => item === 'Sports'));
    hobbies.map((hobbie) => console.log(hobbie));
}