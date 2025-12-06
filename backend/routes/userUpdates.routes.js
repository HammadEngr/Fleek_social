import express from "express";
import {
  addUserDetails,
  addUserExperience,
  getUserExperience,
  updateUserExperience,
} from "../controllers/userController.js";
import uploadImages from "../middlewares/uploadImages.js";

const router = express.Router();

// PERSONAL DETAILS
router.post("/:id/update", uploadImages, addUserDetails);

// EXPERIENCE
router.post("/exp/:userid", addUserExperience);
router.get("/exp/:userid", getUserExperience);
router.patch("/exp/:userid/:expid", updateUserExperience);

export default router;
