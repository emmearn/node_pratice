const fs = require('fs');
const chalk = require('chalk');

function get(yargs) {
    yargs.command({
        command: 'get',
        describe: 'Return a customer by their name',
        builder: {
            name: {
                describe: 'Name of the customer to find',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            const res = getCustomer(argv.name);
            if (res.status) {
                console.log(chalk.green.bold('Customer found:\n'));
                console.log(res.customer);
            } else {
                console.log(chalk.red.bold('Customer not found. Maybe you are looking for:\n'));
                console.log(res.suggestions);
            }
        }
    });
}

function getCustomer(name) {
    const customersJSON = fs.readFileSync('customers.json', 'utf-8'),
            customers = JSON.parse(customersJSON),
            customer = customers.find(customer => customer.name === name),
            res = { status: false, suggestions: '', customer: null};

    if (!customer) {
        customers.map(customer => {
            if (customer.name[0] === name[0]) {
                res.suggestions += '${customer.name}';
            }
        })
        return res;
    }
    res.status = true;
    res.customer = customer;
    return res;
}

module.exports = get;