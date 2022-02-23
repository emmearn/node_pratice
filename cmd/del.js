const fs = require('fs');

function del(yargs) {
    yargs.command({
        command: 'del',
        describe: 'Delete a customer by their name',
        builder: {
            name: {
                describe: 'Name of the customer to delete',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            deleteCustomer(argv.name);
        }
    });
}

function deleteCustomer(name) {
    const customersJSON = fs.readFileSync('customers.json', 'utf-8'),
        customers = JSON.parse(customersJSON)
    customerIndex = customers.findIndex(customer => customer.name === name);

    if (customerIndex === -1) {
        console.log('Customer not found');
        return;
    }

    customers.splice(customerIndex, 1);
    fs.writeFileSync('customers.json', JSON.stringify(customers));
    console.log(customers);
}

module.exports = del;