import express, { Express, Request, Response, Router } from 'express';
import { generatePersonRoutes } from './routes/person_routes';
import PersonRepositoryInterface, { PersonRepository } from './repositories/person_repo';
import PersonServiceInterface, { PersonService } from './services/person_service';
import PersonControllerInterface, { PersonController } from './controllers/person_controller';

const app: Express = express();
const port = 8000;

const personRepo: PersonRepositoryInterface = new PersonRepository("tes");
const personService: PersonServiceInterface = new PersonService(personRepo);
const personController: PersonControllerInterface = new PersonController(personService);


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


generatePersonRoutes(app, personController);

app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
})



