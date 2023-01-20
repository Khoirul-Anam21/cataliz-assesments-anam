import express, { Router } from "express";
import PersonController from "../controllers/person_controller";


export function generatePersonRoutes(app: express.Express, personController: PersonController){
    const router = express.Router();
    
    router.get("/people", personController.getPeople);
    router.post("/people", personController.postNewPerson);
    router.put("/people/:id", personController.putPerson);
    router.delete("/people/:id", personController.deletePerson);

    app.use("/", router);
}

