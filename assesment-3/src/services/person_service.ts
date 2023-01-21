import { Person } from "../models/person_model";
import PersonRepositoryInterface from "../repositories/person_repo";
import PersonRepository from "../repositories/person_repo";

export default interface PersonServiceInterface{
    addNewPersonToData(person: Person): Person;
    getPeopleData(): Person[];
    updatePersonById(id: string, personObj: Person): Person;
    deletePersonById(id: string): string;
}

export function injectPersonService(repo: PersonRepositoryInterface): PersonServiceInterface {
    return new PersonService(repo);
}

class PersonService implements PersonServiceInterface {
    
    private pRepository : PersonRepository;
    
    constructor(pRepository: PersonRepository) {
        this.pRepository = pRepository;
    }

    public addNewPersonToData = (person: Person): Person => {
        try {
            const addedPerson = this.pRepository.insertNewPerson(person);
            return addedPerson;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    public getPeopleData = (): Person[] => {
        try {
            const people: Person[] = this.pRepository.selectAllPerson();
            return people;
        } catch (error) {
            throw error;
        }
    }
    public updatePersonById = (id: string, personObj: Person): Person => {
        try {
            const updatedInfo: string = this.pRepository.updateSelectedPerson(id, personObj);
            if (updatedInfo !== "success") {
                throw updatedInfo;
            }
            const updatedPerson: Person = this.pRepository.selectAllPerson().filter(person=> person.id === id)[0];
            return updatedPerson;
        } catch (error) {
            throw error;
        }
    }
    
    public deletePersonById = (id: string): string => {
        try {
            const dbResponse: string = this.pRepository.DeleteSelectedPerson(id);
            return dbResponse;
        } catch (error) {
            throw error;
        }
    }
}