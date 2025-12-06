import express from "express";
import {
  addUserDetails,
  addUserExperience,
  getUserExperience,
  updateUserExperience,
  getUserDetails,
} from "../controllers/userController.js";
import uploadImages from "../middlewares/uploadImages.js";

const router = express.Router();

// ADD USER PERSONAL DETAILS
router.post("/:id/update", uploadImages, addUserDetails);

// GET USER PERSONAL DETAILS
router.get("/:userid", getUserDetails);

// ADD / UPDATE USER EXPERIENCE
router.post("/exp/:userid", addUserExperience);
router.patch("/exp/:userid/:expid", updateUserExperience);

// GET USER EXPERIENCE
router.get("/exp/:userid", getUserExperience);

export default router;
