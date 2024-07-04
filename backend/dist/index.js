"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const worker_1 = __importDefault(require("./routers/worker"));
const user_1 = __importDefault(require("./routers/user"));
const app = (0, express_1.default)();
app.use("/v1/worker", worker_1.default);
app.use("/v1/user", user_1.default);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
// postgres + prisma => 
