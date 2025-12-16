import mongoose from "mongoose";

const { Schema } = mongoose;

const tagSchema = new Schema({
  createdAt: {
    type: Date,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [3, "Tag must be at least 3 characters long"],
    lowercase: true,
  },
  usageCount: {
    type: Number,
    default: 0,
  },
});

const Tag = mongoose.model("tag", tagSchema);
export default Tag;
