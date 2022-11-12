import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import commentsRouter from "./routes/comments-routes.js";
import reminderRouter from "./routes/reminder-routes.js";
import cors from "cors";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
mongoose.connect("mongodb://127.0.0.1:27017/discuss", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(express.json());
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection Successfull");
});
app.listen(process.env.PORT || 5000);

app.use("/api/user", router);
app.use("/api/blog", blogRouter);
app.use("/api/blog/comments", commentsRouter);
app.use("/api/reminders", reminderRouter);
