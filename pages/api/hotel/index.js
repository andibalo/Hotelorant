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
  if (req.method === "POST") {
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
    } = req.body;

    await validateBody(req, res);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const response = await db.collection("hotels").add({
      name,
      description,
      rooms: parseInt(rooms),
      price: parseInt(price),
      location,
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

  if (req.method === "GET") {
    const hotelsRef = db.collection("hotels");
    const snapshot = await hotelsRef.get();
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });

    return res.status(200).json({ message: "ok" });
  }
}
