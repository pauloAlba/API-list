import express from "express";
import router from "./Router.js";
import fs from "fs";
import https from "https";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const port = "4433"
const server = https.createServer(app)

https.createServer({
  cert: fs.readFileSync("SSL/code.crt"),
  key: fs.readFileSync("SSL/code.key")
}, app).listen(port, () => console.log("Rodando em https"))
