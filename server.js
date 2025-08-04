const express = require("express");
require("dotenv").config();
const contacts = require("./routes/contactRoutes");
const demoMiddleware = require("./middlewares/demoMiddleware");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(demoMiddleware);

app.use("/api/contacts", contacts);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
