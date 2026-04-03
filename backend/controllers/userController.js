import UserDetails from "../models/userDetails.js";
import User from "../models/users.js";
import AppError from "../utils/appError.js";
import AppResponse from "../utils/appResponse.js";
import UserExperience from "../models/userExperience.js";
import UserEducation from "../models/userEducation.js";

export const addUserDetails = async (req, res, next) => {
  try {
    const { id: userId } = req.params;
    const { profession, country, city, phone, languages, bio } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      next(new AppError("User doest not exist", 404));
    }

    const userDetailsId = user.userDetails;

    if (!userDetailsId) {
      const newDetails = new UserDetails({
        profession,
        country,
        city,
        languages: [languages],
        bio,
        userId,
        profileImage: req.uploadedImages.profile_pic,
        coverImage: req.uploadedImages.cover_pic,
        phone,
      });
      await newDetails.save();
      await User.findByIdAndUpdate(userId, { userDetails: newDetails.id });
    } else {
      await UserDetails.findByIdAndUpdate(userDetailsId, {
        profession,
        country,
        city,
        languages: [languages],
        bio,
        userId,
        profileImage: req.uploadedImages.profile_pic,
        coverImage: req.uploadedImages.cover_pic,
        phone,
      });
    }

    return new AppResponse(200, "Updated successfully").send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError("Something Went wrong", 500));
  }
};

export const getUserDetails = async (req, res, next) => {
  try {
    const { userid } = req.params;
    const user = await User.findById(userid).populate("userDetails");

    if (!user) {
      return next(new AppError("No user found", 404));
    }

    const user_details = {
      id: user.id,
      user_name: `${user.firstName} ${user.lastName}`,
      profession: user.userDetails?.profession,
      country: user.userDetails?.country,
      city: user.userDetails?.city,
      bio: user.userDetails?.bio,
      phone: user.userDetails?.phone,
      email: user.email,
    };

    return new AppResponse(200, "user detail fetched", user_details).send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError("something went wrong", 500));
  }
};

export const addUserExperience = async (req, res, next) => {
  try {
    const { userid } = req.params;
    const user = await User.findById(userid);

    if (!user) {
      return next(new AppError("Invalid user", 404));
    }

    const {
      title,
      employer,
      startDate,
      endDate,
      currentlyWorking,
      jobDescription,
    } = req.body;
    console.log(req.body);

    // ADD NEW EXPERIENCE
    const experienceDetails = new UserExperience({
      title,
      employer,
      startDate,
      endDate,
      currentlyWorking,
      jobDescription,
      author: userid,
    });
    await experienceDetails.save();

    // UPDATE USER
    await User.findByIdAndUpdate(userid, {
      $push: { experiences: experienceDetails._id },
    });

    // SEND RESPONSE
    return new AppResponse(200, "experience added successfully", {
      userId: userid,
      experienceDetails,
    }).send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError("something went wrong", 500));
  }
};

export const getUserExperience = async (req, res, next) => {
  try {
    const { userid } = req.params;
    const user = await User.findById(userid);
    const experiences = user.experiences;

    const experience_details = await UserExperience.find({
      _id: { $in: experiences },
    })
      .select("-_id -author")
      .sort({ startDate: -1 });

    // console.log(experience_details);

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
    const { title, employer, startDate, endDate, currentlyWorking } = req.body;

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
        $set: { title, employer, startDate, endDate, currentlyWorking },
      },
      { new: true },
    );

    return new AppResponse(200, "updated successfully", update_exp).send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError(500, "something went wrong"));
  }
};

export const addUserEducation = async (req, res, next) => {
  try {
    const { userid } = req.params;
    const user = await User.findById(userid);

    if (!user) {
      return next(new AppError("Invalid user", 404));
    }

    console.log(req.body);

    const { institution, degree, startDate, endDate, fieldOfStudy } = req.body;

    const educationDetails = new UserEducation({
      institution,
      degree,
      startDate,
      endDate,
      fieldOfStudy,
      author: userid,
    });

    await educationDetails.save();

    // UPDATE USER
    await User.findByIdAndUpdate(userid, {
      $push: { education: educationDetails._id },
    });

    return new AppResponse(200, "education added successfully").send(res);
  } catch (error) {
    console.log(error);
    return next(new AppError(500, "something went wrong"));
  }
};
