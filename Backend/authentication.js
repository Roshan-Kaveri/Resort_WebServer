const express = require("express");
const db = require("./db");
const router = express.Router();

// Basic API Route
router.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

// Signup Route
router.post("/signup", async (req, res) => {
  const { Email, Password, Name, Address, Ph_no } = req.body;
  try {
    const exists = await db.query(
      "SELECT COUNT(*) FROM guests WHERE email = $1",
      [Email]
    );
    if (exists.rows[0].count > 0) {
      return res.status(400).send("User with this email already exists");
    }
    await db.query(
      "INSERT INTO guests (Email, Password, Name, phone_number, Address) VALUES ($1, $2, $3, $4, $5)",
      [Email, Password, Name, Ph_no, Address]
    );
    res.status(200).send("User created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const exists = await db.query(
      "SELECT COUNT(*) FROM guests WHERE email = $1",
      [Email]
    );
    if (exists.rows[0].count <= 0) {
      return res.status(400).send("User with this email doesn't exist");
    }
    const validPassword = await db.query(
      "SELECT guest_id FROM guests WHERE email = $1 AND password = $2",
      [Email, Password]
    );
    if (validPassword.rows.length > 0) {
      res.status(200).send({ guest_id: validPassword.rows[0].guest_id });
    } else {
      res.status(400).send("Incorrect Password");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Password Reset Route
router.post("/passreset", async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const exists = await db.query(
      "SELECT COUNT(*) FROM guests WHERE email = $1",
      [Email]
    );
    if (exists.rows[0].count <= 0) {
      return res.status(400).send("User with this email doesn't exist");
    }
    await db.query("UPDATE guests SET password = $1 WHERE email = $2", [
      Password,
      Email,
    ]);
    res.status(200).send({ message: "Password updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Fetch Routes
const fetchRoutes = [
  { path: "/getguests", query: "SELECT * FROM guests ORDER BY guest_id" },
  {
    path: "/getcabs",
    query: "SELECT * FROM cab_services ORDER BY cabservice_id DESC",
  },
  { path: "/getresorts", query: "SELECT * FROM resort ORDER BY resort_id" },
  { path: "/getrooms", query: "SELECT * FROM rooms ORDER BY room_number" },
  { path: "/getfood", query: "SELECT * FROM food ORDER BY price" },
  {
    path: "/getfoodordered",
    query: "SELECT * FROM food_ordered ORDER BY reservation_id",
  },
  { path: "/getservices", query: "SELECT * FROM services ORDER BY service_id" },
  {
    path: "/getreservations",
    query:
      "SELECT * FROM reservations ORDER BY check_in_date DESC, reservation_id",
  },
  {
    path: "/getinvoices",
    query: "SELECT * FROM invoices ORDER BY invoice_id DESC",
  },
  { path: "/getpayments", query: "SELECT * FROM payments ORDER BY payment_id" },
  { path: "/getstaff", query: "SELECT * FROM staff ORDER BY staff_id" },
  {
    path: "/getdepartment",
    query: "SELECT * FROM department ORDER BY dept_id",
  },
  { path: "/getreviews", query: "SELECT * FROM reviews ORDER BY ratings" },
  {
    path: "/getother",
    query: "SELECT * FROM other_amenities ORDER BY reservation_id",
  },
];

fetchRoutes.forEach(({ path, query }) => {
  router.get(path, async (req, res) => {
    try {
      const result = await db.query(query);
      res.json(result.rows);
    } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

module.exports = router;
