import AppError from "../utils/appError";
async function handle_languages(req, res, next) {
  try {
    const language = req.headers["accept-language"];
    req.lang = language;
    next();
  } catch (error) {
    console.log(error);
    return next(new AppError("something went wrong", 500));
  }
}

export default handle_languages;
