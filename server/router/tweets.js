import express from "express";
import { body } from "express-validator";
import * as tweetsController from "../controller/tweets.js";
import { validate } from "../middleware/validator.js";

/**
 * MVC Pattern
 * Model: data
 * View:
 * Controller: logic
 */

// validation
// sanitization
// Contract Testing: Client-Server

const router = express.Router();

const validateTweet = [
  body("text")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Text should be at least 3 characters"),
  validate,
];

// GET /tweets
// GET /tweets?username=:username

// point: 함수를 호출하는 것이 아니라 함수를 연결시켜줘야 함
router.get("/", tweetsController.getTweets);

// GET /tweets/:id
router.get("/:id", tweetsController.getTweet);

// POST /tweets
router.post("/", validateTweet, tweetsController.createTweet);

// PUT /tweets/:id
router.put("/:id", validateTweet, tweetsController.updateTweet);

// DELETE /tweets/:id
router.delete("/:id", tweetsController.deleteTweet);

export default router;
