//api documentation
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from 'swagger-jsdoc'

//pacakages
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import appRoute from "./routes/capsuleroute.js"
import cors from "cors";
import userRoutes from "./routes/userRoute.js";

//swagger api config 
//swagger api options
const options = {
  definition :{
     openapi :'3.0.0' ,
   info:{
    title:'Ecommerce Application' ,
    description:'MERN Ecommerce Application'
   } ,
   servers:[
    {
      url:"https://brainstormforce.onrender.com/"
   
    }
   ]
  },
  apis:["./routes/*.js"]
}
const spec = swaggerDoc(options);



const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "https://learn-ecommerce-jkwy.vercel.app/";

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

//homeroute root 
app.use('/api-doc' , swaggerUi.serve , swaggerUi.setup(spec))


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome Users , backend site is Working. click <a href=${FRONTEND_URL}>here</a> to visit frontend site.</h1>`
  );
});