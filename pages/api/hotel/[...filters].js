import db from "../../../utils/db/index";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const searchKey = req.query.filters[0];
    const location = req.query.filters[1];
    const rating = req.query.filters[2];
    const price = req.query.filters[3];

    const hotelsRef = db.collection("hotels");

    let hotels = [];

    let snapshot;

    if (location === "null" && rating === "null") {
      snapshot = await hotelsRef.orderBy("price", price).get();
    } else if (location !== "null" && rating !== "null") {
      snapshot = await hotelsRef
        .where("location", "==", location)
        .orderBy("averageRating", rating)
        .orderBy("price", price)
        .get();
    } else if (location === "null") {
      snapshot = await hotelsRef
        .orderBy("averageRating", rating)
        .orderBy("price", price)
        .get();
    } else if (rating === "null") {
      snapshot = await hotelsRef
        .where("location", "==", location)
        .orderBy("price", price)
        .get();
    }

    snapshot.forEach((doc) => {
      hotels.push({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp._seconda,
      });
      console.log(doc.id, "=>", doc.data());
    });

    return res.status(200).json({ hotels });
  }

  return res.status(400).json({ message: "Invalid http method" });
}
