import { TErrorSources } from "./error";


export type TErrorReturn = {
    statusCode:number;
    message:string;
    errorSources:TErrorSources;
}