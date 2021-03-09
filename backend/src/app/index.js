import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import leitorController from "./controllers/leitorController.js";

// Responsável por pegar as variáveis de ambiente
dotenv.config();

const app = express();

// Diz ao node que vamos trabalhar com json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Agrupando as rotas de leitor
app.use("/leitor", leitorController);

// Inicia o servidor na porta 5000
app.listen(5000, () => console.log("Aplicação está no ar..."));
