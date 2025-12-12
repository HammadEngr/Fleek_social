import mongoose from "mongoose";

const { Schema } = mongoose;

const userExperienceSchema = new Schema({
  title: {
    type: String,
    required: [true, "job title is required"],
  },
  employer: {
    type: String,
    required: [true, "employer is required"],
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
  startDateFormatted: String,
  endDateFormatted: String,
  author: {
    type: mongoose.ObjectId,
    required: true,
  },
});

// formatted dates middleware
userExperienceSchema.pre("save", function (next) {
  if (this.startDate) {
    this.startDateFormatted = this.startDate.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
    });
  }

  if (this.endDate) {
    this.endDateFormatted = this.endDate.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
    });
  } else {
    this.endDateFormatted = "present";
  }

  next();
});

const UserExperience = mongoose.model("userExperience", userExperienceSchema);
export default UserExperience;
