import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/router'
import globalErrorHandler from './app/error/globalErrorHandler'


const app:Application = express()

app.use(cors())
app.use(express.json())

// app.use('/v1/user', userRouter);
app.use('/api/v1',router);

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

// global error handler
app.use(globalErrorHandler);

export default app