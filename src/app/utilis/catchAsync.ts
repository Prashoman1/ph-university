import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsnc = (fn:RequestHandler)=>{

    return (req:Request,res:Response,next:NextFunction)=>{
        // Promise.resolve(fn()).catch(err) => next(err));
        Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    }
}

export default catchAsnc;