import express from "express";

const router = express.Router();
import {
  createTag,
  deleteTag,
  getTags,
} from "../controllers/tagsController.js";

router.post("/create", createTag);
router.delete("/:tagId", deleteTag);
router.get("/all", getTags);

export default router;
