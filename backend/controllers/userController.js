import UserDetails from "../models/userDetails.js";
import User from "../models/users.js";
import AppError from "../utils/appError.js";
import AppResponse from "../utils/appResponse.js";
import UserExperience from "../models/userExperience.js";

export const addUserDetails = async (req, res, next) => {
  try {
    const { id: userId } = req.params;
    const { profession, region, languages, bio } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      next(new AppError("User doest not exist", 404));
    }

    const userDetailsId = user.userDetails;

    if (!userDetailsId) {
      const newDetails = new UserDetails({
        profession,
        region,
        languages: [languages],
        bio,
        userId,
        profileImage: req.uploadedImages.profile_pic,
        coverImage: req.uploadedImages.cover_pic,
      });
      await newDetails.save();
      await User.findByIdAndUpdate(userId, { userDetails: newDetails.id });
    } else {
      await UserDetails.findByIdAndUpdate(userDetailsId, {
        profession,
        region,
        languages: [languages],
        bio,
        userId,
        profileImage: req.uploadedImages.profile_pic,
        coverImage: req.uploadedImages.cover_pic,
      });
    }

    return new AppResponse(200, "Updated successfully").send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError("Something Went wrong", 500));
  }
};

export const addUserExperience = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return next(new AppError("Invalid user", 404));
    }

    const { employer, startDate, endDate, currentlyWorking } = req.body;

    // ADD NEW EXPERIENCE
    const experienceDetails = new UserExperience({
      employer,
      startDate,
      endDate,
      currentlyWorking,
      author: userId,
    });
    await experienceDetails.save();

    // UPDATE USER
    await User.findByIdAndUpdate(userId, {
      $push: { experiences: experienceDetails._id },
    });

    // SEND RESPONSE
    return new AppResponse(200, "experience added successfully", {
      userId,
      experienceDetails,
    }).send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError("something went wrong", 500));
  }
};

export const getUserExperience = async (req, res, next) => {
  try {
    const { id: userId } = req.params;
    const user = await User.findById(userId);
    const experiences = user.experiences;

    const experience_details = await UserExperience.find({
      _id: { $in: experiences },
    }).select("-_id -author");

    return new AppResponse(200, "All details fetched", {
      experiences: experience_details,
    }).send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError("something went wrong", 500));
  }
};

export const updateUserExperience = async (req, res, next) => {
  try {
    const { userid, expid } = req.params;
    const { employer, startDate, endDate, currentlyWorking } = req.body;

    const user = await User.findById(userid);
    if (!user) {
      return next(new AppError("No user found", 404));
    }

    const old_exp = await UserExperience.findById(expid);
    if (!old_exp) {
      return next(new AppError("No data found", 404));
    }

    const update_exp = await UserExperience.findByIdAndUpdate(
      expid,
      {
        $set: { employer, startDate, endDate, currentlyWorking },
      },
      { new: true }
    );

    return new AppResponse(200, "updated successfully", update_exp).send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError(500, "something went wrong"));
  }
};
