import express from "express";
import { connection } from "./config/postgres";
const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Connection established with ${PORT}`);
});

connection();
