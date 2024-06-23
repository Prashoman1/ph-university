import { ErrorRequestHandler, NextFunction, Request, Response } from "express";



const globalErrorHandler = (err: ErrorRequestHandler | unknown, req: Request, res: Response, next: NextFunction) => {

    let message = (err as Error).message || "Something went wrong";
    let statusCode:number = 500;
    if(err instanceof Error){
        return res.status(statusCode).json({
            success:false,
            message:message,
            err:err
        });
    }
    next();
}

export default globalErrorHandler;
