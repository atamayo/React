const hobbies = ["Sports", "Coooking"];
const newHobbies = ["Reading"];

const user = {
    name: "Alex",
    age: 44
}

const extendedUser = {
    isAdmin: true,
    ...user
}

export function demoSpreadOperator() {
    console.log("*** SPREAD OPERATOR EXAMPLES ***")

    const mergedHobbies = [...hobbies, ...newHobbies];

    console.log(hobbies);
    console.log(newHobbies);
    console.log(mergedHobbies);

    console.log(extendedUser);
}

