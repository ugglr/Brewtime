const express = require("express");
const mongoose = require("mongoose");

//Import Routes
const authRoute = require("./routes/auth");

const startServer = async () => {
  // CREATE EXPRESS SERVER
  console.log("[SERVER] STARTING EXPRESS SERVER");
  const app = express();

  // Connect to DB
  console.log("[SERVER] CONNECTING TO MONGODB");
  try {
    await mongoose
      .connect(`mongodb://localhost:27017/${process.env.MONGO_DB}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
      .then(() => {
        app.listen(3000, () =>
          console.log("Server is up and running on http://localhost:3000")
        );
      });
  } catch (err) {
    console.log(err);
  }

  // Middlewares
  console.log("[SERVER] APPLYING MIDDLEWARES");
  app.use(express.json());

  //Route Middlewares
  console.log("[SERVER] ADDING ROUTES");
  app.use("/api/user", authRoute);
};

startServer();
