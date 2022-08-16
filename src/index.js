import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bodyParser from "body-parser";
import route from "./routes";

const app = express();
app.use(bodyParser.json());
app.use("/", route);

//configure database
const database = process.env.DATABASE;
mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("database susccessfully connected");
  });

//configure server
const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
export default app;
