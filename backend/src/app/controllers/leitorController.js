import express from "express";
import Leitor from "../models/Leitor.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/cad", async (req, res) => {
  const leitor = new Leitor();

  const novoLeitor = req.body;

  // Verifica no banco se ja exite um leitor com esse ra
  const leitorExiste = await leitor.encontraLeitorPorRa(novoLeitor.ra);

  // Se existir, retorna mensagem de erro
  if (leitorExiste) {
    return res.status("409").json({ erro: "Leitor ja esta cadastrado" });
  }

  // Retorna o ra do novo leitor se o cadastro ter sucesso
  try {
    await leitor.cadastraLeitor(novoLeitor);
    delete novoLeitor.senha;
    const token = jwt.sign(novoLeitor, process.env.JWT_SECRET);
    return res.status("201").json({ token });
  } catch (err) {
    return res.status("500").json({ erro: err });
  }
});

router.post('/login', async(req,res)=>{
    const leitor = new Leitor();
    const dados = req.body
    
    const leitorExiste = await leitor.encontraLeitorPorRa(dados.ra);

    if(!leitorExiste){
      return res.status("404").json({ erro: "Leitor não encontrado" });
    }else{
      try{
        const senhaCompara =await leitor.verificaSenha(leitorExiste.senha,dados.senha)
        
        if(!senhaCompara){
          return res.status("401").json({erro:"Senha incompativeis"});
        }else{
          const token = jwt.sign(dados, process.env.JWT_SECRET);
          return res.status("200").json({
            success:"Leitor e Senha compativeis",
            token:token
          });
        }
      }catch(err){
        return res.status("500").json({erro:res})
      }
    }

});


export default router;
