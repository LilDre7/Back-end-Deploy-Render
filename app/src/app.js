// MODULEJS: import from || export default

// COMMOMJS: require || module.export

import express from "express";

const app = express();

app.use(express.json());

export { app };
