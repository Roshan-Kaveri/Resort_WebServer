const express = require("express");
const cors = require("cors");
const db = require("./db");
const router = express.Router();

const ROOM_PRICES = { Single: 100, Double: 200, Deluxe: 300 };
const EXTRA_SERVICE_COST = 50;

router.post("/", async (req, res) => {
  const {
    roomNo,
    checkInDate,
    checkOutDate,
    roomType,
    others,
    resort_id,
    guest_id,
  } = req.body;

  try {
    // Calculate the number of days
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);
    const differenceInDays = Math.ceil(
      (endDate - startDate) / (1000 * 60 * 60 * 24)
    );

    // Calculate total price
    let totalPrice = (ROOM_PRICES[roomType] || 0) * differenceInDays;
    if (others === "Jym" || others === "Spa") totalPrice += EXTRA_SERVICE_COST;

    // Insert reservation and get reservation_id
    const reservationResult = await db.query(
      "INSERT INTO reservations (resort_id, guest_id, room_number, check_in_date, check_out_date, total_price) VALUES ($1, $2, $3, $4, $5, $6) RETURNING reservation_id",
      [resort_id, guest_id, roomNo, checkInDate, checkOutDate, totalPrice]
    );
    const reservationId = reservationResult.rows[0].reservation_id;

    // Generate today's date
    const today = new Date().toISOString().split("T")[0];

    // Insert invoice
    const invoiceResult = await db.query(
      "INSERT INTO invoices (reservation_id, total_amount, invoice_date) VALUES ($1, $2, $3) RETURNING invoice_id",
      [reservationId, totalPrice, today]
    );
    const invoiceId = invoiceResult.rows[0].invoice_id;

    // Generate HTML response
    const htmlContent = `
      <html>
        <head>
          <title>Room Booking Confirmation</title>
        </head>
        <body>
          <h1>Room Booking Confirmation</h1>
          <p>Invoice ID: ${invoiceId}</p>
          <p>Resort ID: ${resort_id}</p>
          <p>Room Number: ${roomNo}</p>
          <p>Check-in Date: ${checkInDate}</p>
          <p>Check-out Date: ${checkOutDate}</p>
          <p>Room Type: ${roomType}</p>
          <p>Others: ${others}</p>
          <p>Total Price: $${totalPrice}</p>
          <p>Guest ID: ${guest_id}</p>
        </body>
      </html>
    `;

    res.setHeader("Content-Type", "text/html");
    res.send(htmlContent);
  } catch (error) {
    console.error("Error handling reservation:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = router;
