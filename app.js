import express from "express";
import router from "./Router.js";
import fs from "fs";
import https from "https";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);



app.set('port', process.env.PORT || 3000);
app.listen(3000, ()=> console.log("Api Rodando."))



/*
https.createServer({
  cert: fs.readFileSync("src/SSL/code.crt"),
  key: fs.readFileSync("src/SSL/code.key")
}, app).listen(port, () => console.log("Rodando em https"))

*/
