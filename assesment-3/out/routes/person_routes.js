"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePersonRoutes = void 0;
const express_1 = __importDefault(require("express"));
function generatePersonRoutes(app, personController) {
    const router = express_1.default.Router();
    router.get("/people", personController.getPeople);
    router.post("/people", personController.postNewPerson);
    router.put("/people/:id", personController.putPerson);
    router.delete("/people/:id", personController.deletePerson);
    app.use("/", router);
}
exports.generatePersonRoutes = generatePersonRoutes;
