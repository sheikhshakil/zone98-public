require("dotenv").config();
const express = require("express");
const setMiddlewares = require("./middlewares/middlewares");
const router = require("./routes/router");

const app = express();

setMiddlewares(app);

app.set("view engine", "ejs");
app.set("views", "views");

app.use('/', router)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Zone98 started");
});
