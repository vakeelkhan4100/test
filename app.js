import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/user.route.js";
const app = express();
app.use(express.json());
app.use(router)
connectDB();
app.listen(3003, (req, res) => {
   console.log("server is run");
})

