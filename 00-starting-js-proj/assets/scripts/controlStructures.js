export function demoControlStructures() {

    const password = prompt("Your password")

    if (password === "Hello") {
        console.log("Hello works")
    } else if (password === "hello") {
        console.log("hello works");
    } else {
        console.log("Access not granted")
    }

    const hobbies = ["Cooking", "Reading"];

    for (const hobby of hobbies) {
        console.log(hobby);
    }

}