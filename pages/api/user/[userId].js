import db from "../../../utils/db/index";
import admin from "firebase-admin";
import bcrypt from "bcrypt";
import { check, validationResult } from "express-validator";
import {
  initMiddleware,
  validateMiddleware,
} from "../../../utils/middleware/validate-middleware";

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check("phoneNumber")
        .exists({ checkFalsy: true })
        .withMessage("Phone must not be empty"),
      check("name")
        .exists({ checkFalsy: true })
        .withMessage("Name must not be empty"),
      check("dob")
        .exists({ checkFalsy: true })
        .withMessage("Date of birth must not be empty"),
    ],
    validationResult
  )
);

const handler = async (req, res) => {
  if (req.method === "PUT") {
    const { name, phoneNumber, dob } = req.body;

    await validateBody(req, res);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const userRef = db.collection("users").doc(req.query.userId);

    const response = await userRef.update({
      name,
      phoneNumber,
      dob,
    });

    if (!response) {
      throw new Error("Could not update resource");
    }

    return res.status(200).json({ message: "ok" });
  }

  return res.status(400).json({ message: "invalid http method" });
};

export default handler;
