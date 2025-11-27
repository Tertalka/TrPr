import { logFirstAvailable, getWorkersSurnamesByCategory, logWorkersNames, getWorkerByID, createCustomerID, idGenerator, createCustomer, checkoutWorkers } from './utils';
import { Category } from './types';

// Run the same sample actions as the original single-file script, but now modularized:
logFirstAvailable();

console.log('Developers:');
logWorkersNames(getWorkersSurnamesByCategory(Category.Developer));

console.log(getWorkerByID(2));

const myID = createCustomerID('Oleksandr', 3);
console.log(myID);

console.log(idGenerator('Oleksandr', 3));

createCustomer('Oleksandr');
createCustomer('Oleksandr', 25);
createCustomer('Oleksandr', 25, 'Kyiv');

const myWorkers = checkoutWorkers('Oleksandr', 1, 2, 3, 4);
myWorkers.forEach(w => console.log(w));

export {};
