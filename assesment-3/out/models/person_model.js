"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonJSONConverter = void 0;
class PersonJSONConverter {
    static toPerson(json) {
        return JSON.parse(json);
    }
    static toJSON(value) {
        return JSON.stringify(value);
    }
}
exports.PersonJSONConverter = PersonJSONConverter;
