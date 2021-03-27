const path = require("path");
const express = require("express");
const app = require("./app");

const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, "../../client/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening on port ${port}`);
  /* eslint-enable no-console */
});
