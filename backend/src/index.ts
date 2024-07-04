import express from 'express';
import workerRouter from './routers/worker';
import userRouter from './routers/user';

const app = express();


app.use("/v1/worker", workerRouter);
app.use("/v1/user", userRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// postgres + prisma => 