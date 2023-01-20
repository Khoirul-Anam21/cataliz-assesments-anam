import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import { generatePersonRoutes} from './routes/person_routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// generatePersonRoutes(app, Router, _);

app.listen(port, ()=>{console.log(`Server berjalan pada http://localhost:${port}`);
})



