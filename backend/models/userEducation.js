import mongoose from "mongoose";

const { Schema } = mongoose;

const userEducationSchema = new Schema({
  institution: {
    type: String,
    required: [true, "institution is required"],
  },
  degree: {
    type: String,
    required: [true, "degree is required"],
  },
  startDate: {
    type: Date,
    required: [true, "start date is required"],
  },
  endDate: {
    type: Date,
  },
  fieldOfStudy: {
    type: String,
  },
  author: {
    type: mongoose.ObjectId,
    required: true,
  },
});

const UserEducation = mongoose.model("userEducation", userEducationSchema);
export default UserEducation;
