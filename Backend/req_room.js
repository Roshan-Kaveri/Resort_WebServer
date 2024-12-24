const express = require("express");
const cors = require("cors");
const router = express.Router();

// POST route to handle room service requests
router.post("/", (req, res) => {
  const { roomNo, guestName, requestDetails } = req.body;

  // Log the incoming request for debugging purposes
  console.log("Room Service Request Received:");
  console.log(`Room Number: ${roomNo}`);
  console.log(`Guest Name: ${guestName}`);
  console.log(`Request Details: ${requestDetails}`);

  // Response message
  const responseMessage = {
    message:
      "Your request for room service has been received. The service will arrive shortly.",
    requestDetails: {
      roomNo,
      guestName,
      requestDetails,
    },
  };

  // Send a structured JSON response
  res.status(200).json(responseMessage);
});

module.exports = router;
