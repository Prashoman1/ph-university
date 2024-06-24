import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { TErrorSources } from "../interface/error";
import { ZodError, ZodIssue } from "zod";

const globalErrorHandler = (
  err: ErrorRequestHandler | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || 500;
  let message = "Something went wrong!";
  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  const handleZodError = (err: ZodError) => {
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

  if (err instanceof ZodError) {
    let simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: err?.stack,
  });
};

export default globalErrorHandler;
