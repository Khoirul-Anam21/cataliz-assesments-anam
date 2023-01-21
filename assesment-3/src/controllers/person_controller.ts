import { NextFunction, Request, Response } from "express";
import PersonServiceInterface from "../services/person_service";
import { Person, PersonJSONConverter } from "../models/person_model";
import { makeId } from "../services/id_maker";
import ResponseObj, { ResponseTempl } from "../common/response";

export default interface PersonControllerInterface {
    postNewPerson(req: Request, res: Response, next: NextFunction): void;
    getPeople(req: Request, res: Response, next: NextFunction): void;
    putPerson(req: Request, res: Response, next: NextFunction): void;
    deletePerson(req: Request, res: Response, next: NextFunction): void;
}

export function injectPersonController(service: PersonServiceInterface): PersonController {
    return new PersonController(service);
}

class PersonController implements PersonControllerInterface {

    private pService: PersonServiceInterface;

    constructor(pService: PersonServiceInterface) {
        this.pService = pService;

    }

    // Arrow function untuk mengakses thisnya :)
    public postNewPerson = (req: Request, res: Response, next: NextFunction): void => {
        try {
            let response: ResponseTempl;
            const person: Person = PersonJSONConverter.toPerson(JSON.stringify(req.body));
            person.id = makeId();
            const addedPerson = this.pService.addNewPersonToData(person);
            console.log(addedPerson);
            if (!addedPerson) {
                response = ResponseObj.generate(401, "Bad Request");
                res.status(response.code).json(response);
            }
            response = ResponseObj.generate(201, "Success add new person", { person: addedPerson });
            res.status(response.code).json(response);
        } catch (error) {
            next(error);
        }
    }


    public getPeople = (_req: Request, res: Response, next: NextFunction): void => {
        try {
            let response: ResponseTempl;
            const people: Person[] = this.pService.getPeopleData();
            if (!people) {
                response = ResponseObj.generate(404, "Not Found");
                res.status(response.code).json(response);
            }
            response = ResponseObj.generate(200, "OK", people);
            res.status(response.code).json(response);
        } catch (error) {
            next(error);
        }
    }
    public putPerson = (req: Request<{ id: string }>, res: Response, next: NextFunction): void => {
        try {
            let response: ResponseTempl;
            const { id }: { id: string } = req.params;
            const person: Person = PersonJSONConverter.toPerson(JSON.stringify(req.body));
            const updatedPerson: Person = this.pService.updatePersonById(id, person);
            if (!updatedPerson) {
                response = ResponseObj.generate(401, "Something bad happen");
                res.status(response.code).json(response);
            }
            response = ResponseObj.generate(200, "Success update person", updatedPerson);
            res.status(response.code).json(response);
        } catch (error) {
            next(error);
        }
    }
    public deletePerson = (req: Request<{ id: string }>, res: Response, next: NextFunction): void => {
        try {
            let response: ResponseTempl;
            const { id }: { id: string } = req.params;
            const result: string = this.pService.deletePersonById(id);
            if (result !== "success") {
                response = ResponseObj.generate(404, result);
                res.status(response.code).json(response);
            }
            response = ResponseObj.generate(200, "Success delete a person");
            res.status(response.code).json(response);
        } catch (error) {
            next(error);
        }
    }
}