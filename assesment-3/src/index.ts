import express, { Express } from 'express';
import { generatePersonRoutes } from './routes/person_routes';
import PersonRepositoryInterface, { injectPersonRepo } from './repositories/person_repo';
import PersonServiceInterface, { injectPersonService } from './services/person_service';
import PersonControllerInterface, { injectPersonController } from './controllers/person_controller';
import { handleError } from './error';

const app: Express = express();
const port = 8000;

const personRepo: PersonRepositoryInterface = injectPersonRepo("./mock-db.json")
const personService: PersonServiceInterface = injectPersonService(personRepo);
const personController: PersonControllerInterface = injectPersonController(personService);


app.use(express.urlencoded({ extended: false }));
app.use(express.json());



generatePersonRoutes(app, personController);

app.use(handleError)

app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
})



