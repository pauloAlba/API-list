import express from "express";
import router from "./Router.js";
import fs from "fs";
import https from "https";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

const port = "127.0.0.1:443"



app.listen(port, ()=> console.log("Api Rodando."))

/*
https.createServer({
  cert: fs.readFileSync("src/SSL/code.crt"),
  key: fs.readFileSync("src/SSL/code.key")
}, app).listen(port, () => console.log("Rodando em https"))

*/
