import express from "express";
import { getTranslation } from "../controllers/translations.js";
import authRouter from "./auth.routes.js";
import postsRouter from "./posts.routes.js";
import userDetailsRouter from "./user_details.routes.js";
import usersRouter from "./users.routes.js";
import tagsRouter from "./tags.routes.js";

const router = express.Router();

router.get("/tr", getTranslation);
router.use("/auth", authRouter);
router.use("/user", userDetailsRouter);
router.use("/users", usersRouter);
router.use("/posts", postsRouter);
router.use("/tags", tagsRouter);

export default router;
