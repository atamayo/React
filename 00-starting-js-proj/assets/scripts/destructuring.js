function storeOrder(order) {
    console.log('id: ' + order.id);
    console.log('currency: ' + order.currency);
    console.log('amount: ' + order.amount);
}


export function demoDestructuring() {

    console.log("*** DESTRUCTURING EXAMPLES ***")

    storeOrder({ id: 5, currency: 'USD', amount: 15.99 });

    const nameArray = ["Alex", "Tamayo"];
    console.log(nameArray[0] + " " + nameArray[1]);

    // With destructuring array: 
    const [firstName, lastName] = ["Alex", "Tamayo"];
    console.log(firstName, lastName);

    // Other example with object
    const { userName, email } = {
        userName: "atamayo",
        email: "atamayo@email.com"
    }

    console.log(email);

}

