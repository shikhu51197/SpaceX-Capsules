import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import appRoute from "./routes/capsuleroute.js"
import cors from "cors";
import userRoutes from "./routes/userRoute.js";


const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000/";

app.use(bodyParser.json());
app.use(
  cors({
    methods: ["GET", "POST"],
  })
);

mongoose.connect(
  "mongodb+srv://shikha:meghasing@cluster0.tsfyez7.mongodb.net/brainstromforce?retryWrites=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.error("MongoDB Atlas connection error:", err);
});


app.use("/api/auth", userRoutes);
app.use("/api/app", appRoute);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome Users , backend site is Working. click <a href=${FRONTEND_URL}>here</a> to visit frontend site.</h1>`
  );
});