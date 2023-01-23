"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectPersonService = void 0;
function injectPersonService(repo) {
    return new PersonService(repo);
}
exports.injectPersonService = injectPersonService;
class PersonService {
    constructor(pRepository) {
        this.addNewPersonToData = (person) => {
            try {
                const addedPerson = this.pRepository.insertNewPerson(person);
                return addedPerson;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        };
        this.getPeopleData = () => {
            try {
                const people = this.pRepository.selectAllPerson();
                return people;
            }
            catch (error) {
                throw error;
            }
        };
        this.updatePersonById = (id, personObj) => {
            try {
                const updatedInfo = this.pRepository.updateSelectedPerson(id, personObj);
                if (updatedInfo !== "success") {
                    throw updatedInfo;
                }
                const updatedPerson = this.pRepository.selectAllPerson().filter(person => person.id === id)[0];
                return updatedPerson;
            }
            catch (error) {
                throw error;
            }
        };
        this.deletePersonById = (id) => {
            try {
                const dbResponse = this.pRepository.DeleteSelectedPerson(id);
                return dbResponse;
            }
            catch (error) {
                throw error;
            }
        };
        this.pRepository = pRepository;
    }
}
