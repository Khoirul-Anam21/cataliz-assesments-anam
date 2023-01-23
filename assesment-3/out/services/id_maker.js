"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeId = void 0;
const makeId = function () {
    const dataSet = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const random = dataSet[Math.floor(Math.random() * dataSet.length - 1)] + dataSet[Math.floor(Math.random() * dataSet.length - 1)];
    return "0" + random;
};
exports.makeId = makeId;
