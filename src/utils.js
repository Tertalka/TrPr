"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idGenerator = exports.getWorkerByID = void 0;
exports.logFirstAvailable = logFirstAvailable;
exports.getWorkersSurnamesByCategory = getWorkersSurnamesByCategory;
exports.logWorkersNames = logWorkersNames;
exports.createCustomerID = createCustomerID;
exports.createCustomer = createCustomer;
exports.checkoutWorkers = checkoutWorkers;
const types_1 = require("./types");
const data_1 = require("./data");
const validators_1 = require("./validators");
function logFirstAvailable(workers = (0, data_1.getAllWorkers)()) {
    const validWorkers = workers.filter(validators_1.isValidWorker);
    console.log(`Number of workers: ${validWorkers.length}`);
    const firstAvailable = validWorkers.find(w => w.available);
    if (firstAvailable) {
        console.log(`First available: ${firstAvailable.name} ${firstAvailable.surname}`);
    }
    console.log('All workers:');
    for (const w of validWorkers) {
        console.log(`- ${w.name} ${w.surname}`);
    }
}
function getWorkersSurnamesByCategory(category = types_1.Category.Designer) {
    return (0, data_1.getAllWorkers)().filter(validators_1.isValidWorker).filter(w => w.category === category).map(w => w.surname);
}
function logWorkersNames(names) {
    names.forEach(n => console.log(n));
}
const getWorkerByID = (id) => {
    const w = (0, data_1.getAllWorkers)().find(worker => worker.id === id);
    return w && (0, validators_1.isValidWorker)(w) ? w : undefined;
};
exports.getWorkerByID = getWorkerByID;
function createCustomerID(name, id) {
    return `${name}${id}`;
}
let idGenerator = (name, id) => `${name}${id}`;
exports.idGenerator = idGenerator;
function createCustomer(name, age, city) {
    console.log(`Customer name: ${name}`);
    if (typeof age === 'number')
        console.log(`Age: ${age}`);
    if (typeof city === 'string')
        console.log(`City: ${city}`);
}
function checkoutWorkers(customer, ...workerIDs) {
    console.log(`Customer: ${customer}`);
    return workerIDs
        .map(id => (0, exports.getWorkerByID)(id))
        .filter((w) => !!w && w.available)
        .map(w => `${w.name} ${w.surname}`);
}
//# sourceMappingURL=utils.js.map