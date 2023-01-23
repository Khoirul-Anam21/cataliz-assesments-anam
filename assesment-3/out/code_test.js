"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function insertNewPerson() {
    const file = fs_1.default.readFileSync("./db/mock-db.json", "utf-8");
    const json = JSON.parse(file);
    console.log(json);
    console.log(typeof json);
}
insertNewPerson();
