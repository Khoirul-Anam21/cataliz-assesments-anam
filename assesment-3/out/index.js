"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const person_routes_1 = require("./routes/person_routes");
const person_repo_1 = require("./repositories/person_repo");
const person_service_1 = require("./services/person_service");
const person_controller_1 = require("./controllers/person_controller");
const error_1 = require("./error");
const app = (0, express_1.default)();
const port = 8000;
const personRepo = (0, person_repo_1.injectPersonRepo)("./db/mock-db.json");
const personService = (0, person_service_1.injectPersonService)(personRepo);
const personController = (0, person_controller_1.injectPersonController)(personService);
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
(0, person_routes_1.generatePersonRoutes)(app, personController);
app.use(error_1.handleError);
app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
});
