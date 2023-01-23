"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseObj {
    static generate(code, message, data) {
        return { code, message, data };
    }
}
exports.default = ResponseObj;
