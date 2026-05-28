import express from "express";
import { generateQuestions,evaluateAnswer } from "../controllers/interviewController.js";

const router = express.Router();

router.post("/start", generateQuestions);

router.post("/evaluate", evaluateAnswer);

export default router;