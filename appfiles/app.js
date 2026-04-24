const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

let isReady = false;

// Simulate readiness delay (useful for testing readiness probe)
setTimeout(() => {
  isReady = true;
}, 10000); // 10 seconds delay

app.get("/", (req, res) => {
  res.send("Hello from ArgoCD test app 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/ready", (req, res) => {
  if (isReady) {
    res.status(200).send("READY");
  } else {
    res.status(503).send("NOT READY");
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});