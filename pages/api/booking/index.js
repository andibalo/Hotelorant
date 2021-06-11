import db from "../../../utils/db/index";
import admin from "firebase-admin";
import { check, validationResult } from "express-validator";
import {
  initMiddleware,
  validateMiddleware,
} from "../../../utils/middleware/validate-middleware";
import { getSession } from "next-auth/client";

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check("name")
        .exists({ checkFalsy: true })
        .withMessage("Name must not be empty")
        .isLength({ max: 50 })
        .withMessage("Field has maximum of 50 characters"),
      check("email")
        .exists({ checkFalsy: true })
        .withMessage("Email must not be empty")
        .isEmail()
        .withMessage("Must be in correct email format"),
      check("phoneNumber")
        .exists({ checkFalsy: true })
        .withMessage("Phone number must not be empty"),
    ],
    validationResult
  )
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    //console.log(req.body);\
    const session = await getSession({ req: req });

    if (!session) {
      res.status(401).json({ message: "Unathorized access" });

      return;
    }

    const FieldValue = admin.firestore.FieldValue;

    const {
      name,
      phoneNumber,
      email,
      rooms,
      nights,
      totalPrice,
      checkInDate,
      checkOutDate,
      hotelId,
    } = req.body;

    await validateBody(req, res);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const response = await db.collection("bookings").add({
      userId: session.user.id,
      hotelId,
      name,
      phoneNumber,
      email,
      rooms: parseInt(rooms),
      nights: parseInt(nights),
      totalPrice: parseInt(totalPrice),
      checkInDate,
      checkOutDate,
      dateIssued: FieldValue.serverTimestamp(),
      timestamp: FieldValue.serverTimestamp(),
    });

    const doc = await response.get();

    const booking = {
      ...doc.data(),
      id: doc.id,
      dateIssued: doc.data().dateIssued._seconds,
      timestamp: doc.data().timestamp._seconds,
    };

    const hotelRef = db.collection("hotels").doc(hotelId);

    await hotelRef.update({
      bookedCount: admin.firestore.FieldValue.increment(1),
    });

    if (!response) {
      throw new Error("Could not insert into database");
    }

    return res.status(200).json({ message: "ok", booking });
  }

  if (req.method === "GET") {
    const bookings = [];
    const bookingsRef = db.collection("bookings");
    const snapshot = await bookingsRef.get();
    snapshot.forEach((doc) => {
      hotels.push({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp._seconds,
      });

      console.log(doc.id, "=>", doc.data());
    });

    return res.status(200).json({ message: "ok", bookings });
  }

  return res.status(400).json({ message: "invalid http method" });
}
