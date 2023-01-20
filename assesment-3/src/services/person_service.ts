import PersonRepository from "../repositories/person_repo";

export default interface PersonServiceInterface{
    addNewPersonToData(): void;
    getPeopleData(): void;
    updatePersonById(): void;
    deletePersonById(): void;
}

export class PersonService implements PersonServiceInterface {
    
    private pRepository : PersonRepository;
    
    constructor(pRepository: PersonRepository) {
        this.pRepository = pRepository;
    }
    addNewPersonToData(): void {
        throw new Error("Method not implemented.");
    }
    getPeopleData(): void {
        throw new Error("Method not implemented.");
    }
    updatePersonById(): void {
        throw new Error("Method not implemented.");
    }
    deletePersonById(): void {
        throw new Error("Method not implemented.");
    }
}