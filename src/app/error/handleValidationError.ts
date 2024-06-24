import mongoose, { CastError } from "mongoose";
import { TErrorSources } from "../interface/error";
import { TErrorReturn } from "../interface/ErrorReturn";

export const handleValidationError = (err:mongoose.Error.ValidationError):TErrorReturn=>{
    const statusCode = 400;
    let errorSources:TErrorSources = Object.values(err.errors)?.map((val:mongoose.Error.ValidatorError | CastError)=>{
        return{
            path:val.path,
            message:val.message
        }
    })

    return{
        statusCode,
        message:"Validation Error",
        errorSources
    }
}