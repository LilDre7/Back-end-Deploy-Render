// MODULEJS: import from || export default
// COMMOMJS: require || module.export

import express from "express";
import pool from "./server.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  const users = await pool.query("SELECT NOW() ");
  return res.json(users.rows[0]);
});

export default app;
