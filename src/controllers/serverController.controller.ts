// src/controllers/exampleController.ts
import { Request, Response } from "express";

export const getExample = (req: Request, res: Response) => {
  res.send("Hello, world!");
};