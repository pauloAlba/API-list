import express from "express";
import router from "./Router.js";
import fs from "fs";
import https from "https";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 3000;
const server = https.createServer(app)

server.listen(port, () => {
  console.log(`startede on port ${port} `)
});



