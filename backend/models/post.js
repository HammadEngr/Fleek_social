import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  createdAt: {
    type: Date,
  },
  timeAgo: {
    type: String,
  },
  content: {
    type: String,
    required: true,
    minLength: [3, "Post must be atleast 10 characters long"],
  },
  tags: {
    type: [String],
  },
  feelings: {
    type: String,
  },
  picture: {
    type: String,
  },
  author: {
    type: mongoose.ObjectId,
    required: true,
    ref: "user",
  },
});

postSchema.pre("save", function (next) {
  const creation_date = Date.now();
  this.createdAt = creation_date;
  this.timeAgo = this.createdAt.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
  });
  next();
});

const Post = mongoose.model("post", postSchema);
export default Post;
