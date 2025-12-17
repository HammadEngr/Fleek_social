import AppResponse from "../utils/appResponse.js";
import AppError from "../utils/appError.js";
import Tag from "../models/tag.js";
import Post from "../models/post.js";

export const createTag = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return next(new AppError("Tag name is required", 400));
    }

    const newTag = new Tag({ name });
    newTag.save();

    return new AppResponse(200, "tag created successfully", newTag).send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError("something went wrong", 500));
  }
};

// ONLY BY ADMIN
export const deleteTag = async (req, res, next) => {
  try {
    const { tagId } = req.params;

    if (!tagId) {
      return next(new AppError("Tag ID is required", 400));
    }

    const TagDeleted = await Tag.findByIdAndDelete(tagId);

    if (!TagDeleted) {
      return next(new AppError("Tag not found", 404));
    }

    return new AppResponse(200, "tag deleted successfully").send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError("something went wrong", 500));
  }
};

export const getTags = async (req, res, next) => {
  try {
    const tags = await Tag.aggregate([
      { $sort: { usageCount: -1 } },
      {
        $project: {
          id: "$_id",
          name: 1,
          _id: 0,
        },
      },
    ]);

    if (!tags) {
      return next(new AppError("No tags found", 404));
    }

    return new AppResponse(200, "tags fetched successfully", tags).send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError("something went wrong", 500));
  }
};
