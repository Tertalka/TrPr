"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCategory = isValidCategory;
exports.isValidWorker = isValidWorker;
const types_1 = require("./types");
function isValidCategory(value) {
    // Category is numeric enum; check membership
    return typeof value === 'number' && Object.values(types_1.Category).includes(value);
}
function isValidWorker(obj) {
    if (!obj || typeof obj !== 'object')
        return false;
    return (typeof obj.id === 'number' &&
        typeof obj.name === 'string' &&
        typeof obj.surname === 'string' &&
        typeof obj.available === 'boolean' &&
        typeof obj.salary === 'number' &&
        isValidCategory(obj.category));
}
//# sourceMappingURL=validators.js.map