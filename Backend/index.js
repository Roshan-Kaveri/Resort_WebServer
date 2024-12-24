const express = require("express");
const cors = require("cors");
const router = express.Router();
const app = express();

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());
router.use(express.json());

// Importing server files
const roombooking = require("./roombooking.js");
const req_room = require("./req_room.js");
const cabbooking = require("./cabbooking.js");
const foodbooking = require("./foodbooking.js");
const auth_and_getters = require("./authentication.js");

// Define routes for each server
app.use("/RoomBook", roombooking);
app.use("/Home_page", req_room);
app.use("/cab", cabbooking);
app.use("/Food", foodbooking);
app.use("/", auth_and_getters);

app.listen(5000, () => {
  console.log("Router server started on port 5000");
});

module.exports = app;
