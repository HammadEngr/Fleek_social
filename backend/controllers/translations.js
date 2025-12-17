import { readFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import AppError from "../utils/appError.js";
import AppResponse from "../utils/appResponse.js";
//
export const getTranslation = async (req, res, next) => {
  try {
    const { module } = req.query;
    const { lang } = req;

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, "..", "translations", `${lang}.json`);

    readFile(filePath, "utf-8", (e, data) => {
      if (e) {
        return next(new AppError("language file not found", 404));
      }
      const lang_data = JSON.parse(data)[module];
      return new AppResponse(
        200,
        `got all ${lang} translations for module: ${module}`,
        lang_data
      ).send(res);
    });
  } catch (error) {
    console.log(error);
    return next(new AppError("something went wrong", 500));
  }
};
