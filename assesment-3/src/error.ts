import { NextFunction, Request, Response } from "express"

export const handleError = (err: Error, req: Request, res: Response, next: NextFunction) : void => {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
}