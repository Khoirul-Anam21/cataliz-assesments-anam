"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleError = (err, res) => {
    console.log(err);
    res.status(500).json({
        message: "Internal server error",
    });
};
