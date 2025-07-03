// server.js
const express = require("express");
const app = express();
app.get("/api/services", (req, res) => {
  res.json([{ name: "Cloud Solutions" }, { name: "Cybersecurity" }]);
});
app.listen(5000, () => console.log("Server running!"));