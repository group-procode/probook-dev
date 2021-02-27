import express from "express";
import bodyParser from "body-parser";
import Leitor from "./models/Leitor.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/oi", (req, res) => res.json({ oi: "salve" }));

app.post("/leitor/cad", (req, res) => {
  const novoLeitor = req.body;
  console.log(process.env.PG_HOST);

  Leitor.cadastraLeitor(novoLeitor)
    .then((a) => {
      return res.status("201").json(a);
    })
    .catch((err) => {
      throw err;
    });
});

app.listen(5000, () => console.log("Aplicacao esta no ar..."));
