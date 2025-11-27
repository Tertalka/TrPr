"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const types_1 = require("./types");
// Run the same sample actions as the original single-file script, but now modularized:
(0, utils_1.logFirstAvailable)();
console.log('Developers:');
(0, utils_1.logWorkersNames)((0, utils_1.getWorkersSurnamesByCategory)(types_1.Category.Developer));
console.log((0, utils_1.getWorkerByID)(2));
const myID = (0, utils_1.createCustomerID)('Oleksandr', 3);
console.log(myID);
console.log((0, utils_1.idGenerator)('Oleksandr', 3));
(0, utils_1.createCustomer)('Oleksandr');
(0, utils_1.createCustomer)('Oleksandr', 25);
(0, utils_1.createCustomer)('Oleksandr', 25, 'Kyiv');
const myWorkers = (0, utils_1.checkoutWorkers)('Oleksandr', 1, 2, 3, 4);
myWorkers.forEach(w => console.log(w));
//# sourceMappingURL=index.js.map