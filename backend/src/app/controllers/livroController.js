import express from "express";
import Livros from "../models/Livro.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.get("/search-book", async(req, res) => {
    const livro = new Livros();
    try {
        var isbn = req.query.isbn;
        if (isbn == null) {
            return res.status("500").json({ erro: 'Não foi passado codigo livro' })
        }
        var livro_data = await livro.livrosSearch(isbn);
        if (!livro_data) {
            return res.status("401").json({ erro: "Livro não encontrado" });
        }
        return res.status("200").json({

            data: livro_data
        });

    } catch (err) {
        return res.status("500").json({ erro: err })
    }
});

export default router;