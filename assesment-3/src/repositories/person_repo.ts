import { Person } from "../models/person_model";
import fs from 'fs';

export default interface PersonRepositoryInterface {
    insertNewPerson(person: Person): Person;
    selectAllPerson(): Person[];
    updateSelectedPerson(id: string, newPerson: Person): string;
    DeleteSelectedPerson(id: string): string;
}

export function injectPersonRepo(dbPath: string) : PersonRepositoryInterface {
    return new PersonRepository(dbPath);
}

class PersonRepository implements PersonRepositoryInterface {
    private db: string;
    private peopleData: Person[];

    constructor(db: string) {
        this.db = db;
        const file = fs.readFileSync(db, "utf-8");
        this.peopleData = JSON.parse(file)
    }

    public insertNewPerson = (person: Person): Person => {
        try {
            this.peopleData.push(person);
            fs.writeFileSync(this.db, JSON.stringify(this.peopleData));
            return person;   
        } catch (error) {
            throw error;
        }
    }

    public selectAllPerson = (): Person[] => {
        try {
            const people = this.peopleData;
            return people;
        } catch (error) {
            throw error;
        }
    }
    public updateSelectedPerson = (id: string, newPerson: Person): string => {
        try {
            let oldPersonIndex: number = this.peopleData.findIndex(person => person.id === id);
            newPerson.id = id;
            this.peopleData[oldPersonIndex] = newPerson;
            fs.writeFileSync(this.db, JSON.stringify(this.peopleData));
            console.log("Success update person");
            return "success";
        } catch (error) {
            throw "Error: "+ error;
        }
    }
    public DeleteSelectedPerson = (id: string): string =>{
        try {
            const personIndex: number = this.peopleData.findIndex(person => person.id === id);
            if (personIndex === -1){
                return "Person data specified doesn't exist";
            }
            this.peopleData.splice(personIndex, 1);
            fs.writeFileSync(this.db, JSON.stringify(this.peopleData));
            return "success";
        } catch (error) {
            throw error
        }
    }

}