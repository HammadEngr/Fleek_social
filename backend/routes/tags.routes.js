import express from "express";

const router = express.Router();
import {
  createTag,
  deleteTage,
  getTags,
} from "../controllers/tagsController.js";

router.post("/create", createTag);
router.delete("/:tagId", deleteTage);
router.get("/all", getTags);

export default router;
