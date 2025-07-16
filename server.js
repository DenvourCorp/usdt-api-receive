const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.json());

app.post("/receive", (req, res) => {
  const data = req.body;
  console.log("✅ Payload received:", data);

  // Save data to file
  fs.appendFileSync("payloads.txt", JSON.stringify(data) + "\n");

  res.json({ status: "success", message: "Payload received" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("🚀 API running on port", PORT));
