import mongoose from "mongoose";
import { TErrorReturn } from "../interface/ErrorReturn";
import { TErrorSources } from "../interface/error";

export const handleCastError = (err:mongoose.Error.CastError):TErrorReturn=>{
    const errorSources: TErrorSources = [
        {
          path: err.path,
          message: err.message,
        },
      ];
    
      const statusCode = 400;
    
      return {
        statusCode,
        message: 'Invalid ID',
        errorSources,
      };
}