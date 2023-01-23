"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Internal server error",
    });
};
exports.handleError = handleError;
