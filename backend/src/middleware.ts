import { NextFunction, Request } from "express";
import jwt from "jsonwebtoken";


export function authMiddleware(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers["authorization"];
}