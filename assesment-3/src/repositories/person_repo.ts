export default interface PersonRepositoryInterface {
    insertNewPerson(): void;
    selectAllPerson(): void;
    updateSelectedPerson(): void;
    DeleteSelectedPerson(): void;
}

export class PersonRepository implements PersonRepositoryInterface {
    private db: string;
    
    constructor(db: string) {
        this.db = db;
    }

    insertNewPerson(): void {
        throw new Error("Method not implemented.");
    }
    selectAllPerson(): void {
        throw new Error("Method not implemented.");
    }
    updateSelectedPerson(): void {
        throw new Error("Method not implemented.");
    }
    DeleteSelectedPerson(): void {
        throw new Error("Method not implemented.");
    }

}