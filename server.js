const express = require('express');
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", userRoutes);
app.use("/", authRoutes);

app.listen(port, () => {
  console.log(`User management system listening on port ${port}`)
});