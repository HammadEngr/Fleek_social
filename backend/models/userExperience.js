import mongoose from "mongoose";

const { Schema } = mongoose;

const userExperienceSchema = new Schema({
  employer: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: {
    type: Date,
    required: [true, "start date is required"],
  },
  endDate: {
    type: Date,
  },
  currentlyWorking: {
    type: Boolean,
    default: false,
  },
  author: {
    type: mongoose.ObjectId,
    required: true,
  },
});

const UserExperience = mongoose.model("userExperience", userExperienceSchema);
export default UserExperience;
