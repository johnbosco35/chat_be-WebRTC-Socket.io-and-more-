import express,{ Application } from "express";
import { MiddleWare } from "./MiddleWare";
import {dbconnect} from "./config/db"

const app: Application = express();

const port: Number | any = process.env.port || 3000;
MiddleWare(app);

const server = app.listen(port, () => {
  dbconnect()
  console.log(`Server is now on ${port}`);
});

process.on("unhandledRejection", (error: any) => {
  console.log("unhandledRejection", error);
  process.exit(1);
});
process.on("uncaughtException", (reason: any) => {
  console.log("uncaughtException", reason);

  server.close(() => {
    process.exit(1);
  });
});