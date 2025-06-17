import express from "express";
import { testRoute } from "../controllers/test.controller";

const router = express.Router();

router.post("/test-route", testRoute);

export default router;