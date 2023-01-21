import fs from  'fs';
import { Person } from './models/person_model';
import { join } from 'path';

function insertNewPerson(){
    const file = fs.readFileSync("./db/mock-db.json", "utf-8");
    const json: Person[] = JSON.parse(file)
    console.log(json);
    console.log(typeof json);
    
}

insertNewPerson()