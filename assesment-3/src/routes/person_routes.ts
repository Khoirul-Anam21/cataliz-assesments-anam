import express, { Router } from "express";
import PersonController from "../controllers/person_controller";


export function generatePersonRoutes(app: express.Express, router: Router, personController: PersonController){
    router.get("/people");
    router.post("/people");
    router.put("/people/:id");
    router.delete("/people/:id");
}

