const path = require("path");
const app = require("./app");

const port = process.env.PORT || 5000;

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening on port ${port}`);
  /* eslint-enable no-console */
});
