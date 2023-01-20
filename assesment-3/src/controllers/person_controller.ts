import { NextFunction, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import PersonServiceInterface from "../services/person_service";

export default interface PersonControllerInterface{
    postNewPerson(req: Request, res: Response, next: NextFunction) : void;
    getPeople(req: Request, res: Response, next: NextFunction) : void;
    putPerson(req: Request, res: Response, next: NextFunction) : void;
    deletePerson(req: Request, res: Response, next: NextFunction) : void;
}

export class PersonController implements PersonControllerInterface{

    private pService: PersonServiceInterface;

    constructor(pService: PersonServiceInterface) {
        this.pService = pService;
    }

    postNewPerson(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): void {
        
        throw new Error("Method not implemented.");
    }
    getPeople(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): void {
        throw new Error("Method not implemented.");
    }
    putPerson(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): void {
        throw new Error("Method not implemented.");
    }
    deletePerson(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): void {
        throw new Error("Method not implemented.");
    }
}