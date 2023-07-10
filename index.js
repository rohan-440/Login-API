const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const  PORT  = 8080;
const url = "mongodb://localhost:27017/test"

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log("Server is listening on port : " + PORT);
});

// app.use(
//   cors({
//     origin: ["http://localhost:8080"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
// app.use(cors())
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);