import express from "express";
import router from "./Router.js";
import fs from "fs";
import https from "https";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.use(router);

const port = "127.0.0.1:443"
const server = https.createServer(app)

app.listen(port, () => console.log("Rodando em https"))
