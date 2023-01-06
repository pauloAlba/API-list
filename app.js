import express from "express";
import router from "./Router.js";
import fs from "fs";
import https from "https";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://127.0.0.1']
}));
app.use(router);

const port = "443"
const server = https.createServer(app)

https.createServer({
  cert: fs.readFileSync("SSL/code.crt"),
  key: fs.readFileSync("SSL/code.key")
}, app).listen(port, () => console.log("Rodando em https"))
