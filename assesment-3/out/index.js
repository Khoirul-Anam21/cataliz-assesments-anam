"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const person_routes_1 = require("./routes/person_routes");
const person_repo_1 = require("./repositories/person_repo");
const person_service_1 = require("./services/person_service");
const person_controller_1 = require("./controllers/person_controller");
dotenv_1.default.config();
const personRepo = new person_repo_1.PersonRepository("tes");
const personService = new person_service_1.PersonService(personRepo);
const personController = new person_controller_1.PersonController(personService);
const app = (0, express_1.default)();
const port = process.env.PORT;
(0, person_routes_1.generatePersonRoutes)(app, personController);
app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
});
