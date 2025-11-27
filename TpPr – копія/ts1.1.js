"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1.2. Enum категорій
var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
function getAllWorkers() {
    return [
        { id: 1, name: "Danylo", surname: "Romanovych", available: false, salary: 1000, category: Category.BusinessAnalyst },
        { id: 2, name: "Pavlo", surname: "Skoropadskyi", available: true, salary: 1500, category: Category.Developer },
        { id: 3, name: "Mykola", surname: "Mikhnovskyi", available: false, salary: 1600, category: Category.Designer },
        { id: 4, name: "Yarema", surname: "Vyshnevetskyi", available: true, salary: 1300, category: Category.Developer }
    ];
}
//# sourceMappingURL=ts1.1.js.map