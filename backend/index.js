import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello from express server");    
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to mongoDB");
    app.listen(PORT, () => {
      console.log(`app is listing to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
