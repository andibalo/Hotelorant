import db from "../../../../utils/db/index";
import admin from "firebase-admin";
import bcrypt from "bcrypt";
import { check, validationResult } from "express-validator";
import {
  initMiddleware,
  validateMiddleware,
} from "../../../../utils/middleware/validate-middleware";

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check("currentPassword")
        .exists({ checkFalsy: true })
        .withMessage("Current Password must not be empty")
        .isLength({ min: 6 })
        .withMessage("Current Password must be at least 6 characters long"),
      check("newPassword")
        .exists({ checkFalsy: true })
        .withMessage("New Password must not be empty")
        .isLength({ min: 6 })
        .withMessage("New Password must be at least 6 characters long"),
    ],
    validationResult
  )
);

const handler = async (req, res) => {
  if (req.method === "PUT") {
    const { currentPassword, newPassword } = req.body;

    await validateBody(req, res);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const userRef = db.collection("users").doc(req.query.userId);

    const user = userRef.get();

    const isPasswordMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordMatch) {
      throw new Error("Passwords do not match");
    }

    const response = await userRef.update({
      password: newPassword,
    });

    if (!response) {
      throw new Error("Could not update resource");
    }

    return res.status(200).json({ message: "ok" });
  }

  return res.status(400).json({ message: "invalid http method" });
};

export default handler;
