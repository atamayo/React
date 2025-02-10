class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log("Hi! My name is " + this.firstName + " " + this.lastName);
    }
}

export function demoClasses() {

    console.log("*** CLASS EXAMPLES ***")

    const user = new User("Alex", "Tamayo");
    user.greet();
}