import AppResponse from "../utils/appResponse";
import AppError from "../utils/appError";
import Tag from "../models/tag.js";
import Post from "../models/post.js";

export const createTag = async (req, res, next) => {
  try {
    return new AppResponse(200, "tag created successfully").send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError("something went wrong", 500));
  }
};

export const deleteTag = async (req, res, next) => {
  try {
    return new AppResponse(200, "tag deleted successfully").send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError("something went wrong", 500));
  }
};

export const getTags = async (req, res, next) => {
  try {
    return new AppResponse(200, "tags fetched successfully").send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError("something went wrong", 500));
  }
};
