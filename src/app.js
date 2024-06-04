const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
mongoose.set("strictQuery", false);
require("dotenv").config();
const MongoURI = process.env.MONGO_URI;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const cookieParser = require("cookie-parser");


const app = express();
const port = process.env.PORT;

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "crepe-strips",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 3600000 },
  })
);
app.use(bodyParser.json());
mongoose
  .connect(MongoURI)
  .then(() => {
    console.log("MongoDB is now connected!");

    // Starting server
    app.listen(port, () => {
      console.log(`Listening to requests on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.status(200).send("You have everything installed!");
});