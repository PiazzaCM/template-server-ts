// src/routes/index.ts
import { Router } from "express";
import { getExample } from "../controllers/serverController.controller";

const router = Router();

router.get("/example", getExample);

export default router;