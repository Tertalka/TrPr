"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workersData = void 0;
exports.getAllWorkers = getAllWorkers;
const types_1 = require("./types");
exports.workersData = [
    { id: 1, name: 'Danylo', surname: 'Romanovych', available: false, salary: 1000, category: types_1.Category.BusinessAnalyst },
    { id: 2, name: 'Pavlo', surname: 'Skoropadskyi', available: true, salary: 1500, category: types_1.Category.Developer },
    { id: 3, name: 'Mykola', surname: 'Mikhnovskyi', available: false, salary: 1600, category: types_1.Category.Designer },
    { id: 4, name: 'Yarema', surname: 'Vyshnevetskyi', available: true, salary: 1300, category: types_1.Category.Developer }
];
function getAllWorkers() {
    // return shallow copies to avoid accidental mutation of module data
    return exports.workersData.map(w => ({ ...w }));
}
//# sourceMappingURL=data.js.map