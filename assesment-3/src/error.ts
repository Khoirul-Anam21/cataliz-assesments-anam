import { NextFunction, Request, Response } from "express"

const handleError = (err: Error, res: Response) : void => {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
}