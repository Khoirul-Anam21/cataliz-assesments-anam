"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectPersonRepo = void 0;
const fs_1 = __importDefault(require("fs"));
function injectPersonRepo(dbPath) {
    return new PersonRepository(dbPath);
}
exports.injectPersonRepo = injectPersonRepo;
class PersonRepository {
    constructor(db) {
        this.insertNewPerson = (person) => {
            try {
                this.peopleData.push(person);
                fs_1.default.writeFileSync(this.db, JSON.stringify(this.peopleData));
                return person;
            }
            catch (error) {
                throw error;
            }
        };
        this.selectAllPerson = () => {
            try {
                const people = this.peopleData;
                return people;
            }
            catch (error) {
                throw error;
            }
        };
        this.updateSelectedPerson = (id, newPerson) => {
            try {
                let oldPersonIndex = this.peopleData.findIndex(person => person.id === id);
                newPerson.id = id;
                this.peopleData[oldPersonIndex] = newPerson;
                fs_1.default.writeFileSync(this.db, JSON.stringify(this.peopleData));
                console.log("Success update person");
                return "success";
            }
            catch (error) {
                throw "Error: " + error;
            }
        };
        this.DeleteSelectedPerson = (id) => {
            try {
                const personIndex = this.peopleData.findIndex(person => person.id === id);
                if (personIndex === -1) {
                    return "Person data specified doesn't exist";
                }
                this.peopleData.splice(personIndex, 1);
                fs_1.default.writeFileSync(this.db, JSON.stringify(this.peopleData));
                return "success";
            }
            catch (error) {
                throw error;
            }
        };
        this.db = db;
        const file = fs_1.default.readFileSync(db, "utf-8");
        this.peopleData = JSON.parse(file);
    }
}
