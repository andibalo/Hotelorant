import db from "../../../utils/db/index";
import admin from "firebase-admin";
import { check, validationResult } from "express-validator";
import {
  initMiddleware,
  validateMiddleware,
} from "../../../utils/middleware/validate-middleware";

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check("name")
        .exists({ checkFalsy: true })
        .withMessage("Product name must not be empty")
        .isLength({ max: 50 })
        .withMessage("Field has maximum of 50 characters"),
      check("description")
        .exists({ checkFalsy: true })
        .withMessage("Description must not be empty")
        .isLength({ max: 150 })
        .withMessage("Field has maximum of 150 characters"),
    ],
    validationResult
  )
);

export default async function handler(req, res) {
  if (req.method === "PUT") {
    //console.log(req.body);\

    const FieldValue = admin.firestore.FieldValue;

    const {
      name,
      description,
      rooms,
      price,
      location,
      hasTv,
      hasAc,
      hasFridge,
      hasWifi,
      images,
    } = req.body;

    await validateBody(req, res);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const response = await db.collection("hotels").add({
      images,
      name,
      description,
      rooms: parseInt(rooms),
      price: parseInt(price),
      location,
      rating: [],
      hasTv,
      hasWifi,
      hasAc,
      hasFridge,
      timestamp: FieldValue.serverTimestamp(),
    });

    if (!response) {
      throw new Error("Could not insert into database");
    }

    return res.status(200).json({ message: "ok" });
  }

  if (req.method === "DELETE") {
    try {
      await db.collection("hotels").doc(req.query.hotelId).delete();
    } catch (error) {
      throw new Error("COuld not delete data");
    }

    return res.status(200).json({ message: "ok" });
  }

  return res.status(400).json({ message: "invalid http method" });
}
