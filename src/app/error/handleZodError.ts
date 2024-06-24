import { ZodError, ZodIssue } from "zod";
import { TErrorReturn } from "../interface/ErrorReturn";

export const handleZodError = (err: ZodError):TErrorReturn => {
    const statusCode = 400;
    return {
      statusCode,
      message: "Zod validation Error",
      errorSources: err.issues.map((issue: ZodIssue) => {
        return {
          path: issue?.path?.[issue.path.length - 1],
          message: issue?.message,
        };
      }),
    };
  };