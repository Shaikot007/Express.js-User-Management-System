const express = require('express');
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`User management system listening on port ${port}`)
});