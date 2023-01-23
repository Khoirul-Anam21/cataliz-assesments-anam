"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectPersonController = void 0;
const person_model_1 = require("../models/person_model");
const id_maker_1 = require("../services/id_maker");
const response_1 = __importDefault(require("../common/response"));
function injectPersonController(service) {
    return new PersonController(service);
}
exports.injectPersonController = injectPersonController;
class PersonController {
    constructor(pService) {
        // Arrow function untuk mengakses thisnya :)
        this.postNewPerson = (req, res, next) => {
            try {
                let response;
                const person = person_model_1.PersonJSONConverter.toPerson(JSON.stringify(req.body));
                person.id = (0, id_maker_1.makeId)();
                const addedPerson = this.pService.addNewPersonToData(person);
                console.log(addedPerson);
                if (!addedPerson) {
                    response = response_1.default.generate(401, "Bad Request");
                    res.status(response.code).json(response);
                }
                response = response_1.default.generate(201, "Success add new person", { person: addedPerson });
                res.status(response.code).json(response);
            }
            catch (error) {
                next(error);
            }
        };
        this.getPeople = (_req, res, next) => {
            try {
                let response;
                const people = this.pService.getPeopleData();
                if (!people) {
                    response = response_1.default.generate(404, "Not Found");
                    res.status(response.code).json(response);
                }
                response = response_1.default.generate(200, "OK", people);
                res.status(response.code).json(response);
            }
            catch (error) {
                next(error);
            }
        };
        this.putPerson = (req, res, next) => {
            try {
                let response;
                const { id } = req.params;
                const person = person_model_1.PersonJSONConverter.toPerson(JSON.stringify(req.body));
                const updatedPerson = this.pService.updatePersonById(id, person);
                if (!updatedPerson) {
                    response = response_1.default.generate(401, "Something bad happen");
                    res.status(response.code).json(response);
                }
                response = response_1.default.generate(200, "Success update person", updatedPerson);
                res.status(response.code).json(response);
            }
            catch (error) {
                next(error);
            }
        };
        this.deletePerson = (req, res, next) => {
            try {
                let response;
                const { id } = req.params;
                const result = this.pService.deletePersonById(id);
                if (result !== "success") {
                    response = response_1.default.generate(404, result);
                    res.status(response.code).json(response);
                }
                response = response_1.default.generate(200, "Success delete a person");
                res.status(response.code).json(response);
            }
            catch (error) {
                next(error);
            }
        };
        this.pService = pService;
    }
}
