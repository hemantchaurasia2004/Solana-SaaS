import express from 'express';
import workerRouter from './routers/worker';
import userRouter from './routers/user';

const app = express();


app.use("/v1/worker", workerRouter);
app.use("/v1/user", userRouter);

// postgres + prisma => 