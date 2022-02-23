const fs = require('fs');

function add(yargs) {
    yargs.command({
        command: 'add',
        describe: 'Adds a new customer',
        builder: {
            name: {
                describe: 'Name of the customer to add',
                demandOption: true,
                type: 'string'
            },
            email: {
                describe: 'email of the customer to add',
                demandOption: true,
                type: 'string'
            },
            phone: {
                describe: 'Phone of the customer to add',
                demandOption: true,
                type: 'string'
            },
        },
        handler(argv) {
            addCustomer(argv);
        }
    });
}

function addCustomer({name, email, phone}) {
    const customersJSON = fs.readFileSync('customers.json', 'utf-8'),
            customers = JSON.parse(customersJSON);

    customers.push({ name, email, phone });
    fs.writeFileSync('customers.json', JSON.stringify(customers));
    console.log(customers);
}

module.exports = add;