import express from "express";
import Leitor from "../models/Leitor.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { transporterRSenha } from "../../helpers/mails/transporterRedefSenha.js"

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

router.post('/login', async (req, res) => {
  const leitor = new Leitor();
  const dados = req.body;

  const leitorExiste = await leitor.encontraLeitorPorRa(dados.ra);

  if (!leitorExiste) {
    return res.status("404").json({ erro: "Leitor ou senha não encontrado" });
  }
  try {
    const senhaCompara = await leitor.verificaSenha(leitorExiste.senha, dados.senha);
    if (!senhaCompara) {
      return res.status("401").json({ erro: "Leitor ou senha não encontrado" });
    }
    const token = jwt.sign(dados, process.env.JWT_SECRET);
    return res.status("200").json({
      success: "Logado com sucesso , Bem-vindo ao Probook",
      token: token
    });
  } catch (err) {
    return res.status("500").json({ erro: err })
  }


});


router.post("/esqueci-senha", async (req, res) => {
  const leitor = new Leitor();
  const { email } = req.body;

  // Verifica no banco se ja exite um leitor com esse ra
  const dadosLeitor = await leitor.encontraLeitorPorEmail(email);

  if (!dadosLeitor) {
    return res.status(404).json({ erro: "Leitor não encontrado" });
  }

  // Gerando um codigo aleatorio entre 10000 e 99999
  const codigo = Math.floor(Math.random() * (10000 - 99999) + 10000)

  // Criando um token com o codigo valido por 30 minutos
  const token = await jwt.sign(
    { codigo },
    process.env.JWT_SECRET,
    { expiresIn: '30m' }
  );

  try {
    // Setando as opções nescessárias para o envio do email
    const opcoesEmail = {
      from: 'lucas.licar2016@gmail.com',
      to: dadosLeitor.e_mail,
      subject: 'Redefinir senha PROBook',
      template: 'redefSenha', // Arquivo que contem o HTML a ser enviado
      context: { codigo } // Variaveis usadas no handlebars
    }

    // Enviando email
    transporterRSenha.sendMail(opcoesEmail, (err, info) => {
      if (err) {
        throw new Error("Não foi possivel enviar o email. Erro: " + err.message)
      }
      else
        return res.status(200).json({ email: dadosLeitor.e_mail, token: token });
    });
  } catch (err) {
    return res.status(400).json({ erro: err.message });
  }
})

router.post('/enviar-codigo', async (req, res) => {
  const codigoCliente = req.body.codigo;

  // Recuperando o token do cabeçalho da requisição
  const [, token] = req.headers.authorization.split(' ')

  try {
    // Descriptografando o token
    const payload = await jwt.verify(token, process.env.JWT_SECRET)
    const codigoToken = payload.codigo;

    // Verifica se o codigo enviado pelo usuário é igual ao do token
    if (codigoToken == codigoCliente) {
      res.status(200).json({ success: 'Autorizado' });
    }
    else {
      res.status(401).json({ message: "Código Incorreto" });
    }

  } catch (err) {
    console.log(err)
    res.status(401).json(err.message);
  }

})

router.post('/redefinir-senha', async (req, res) => {

  const leitor = new Leitor();
  const { email, novaSenha } = req.body;

  //Verifica se o leitor existe
  const dadosLeitor = await leitor.encontraLeitorPorEmail(email);
  if (!dadosLeitor) {
    return res.status(404).json({ erro: "Leitor não encontrado" });
  }

  try {
    const ra = dadosLeitor.ra;
    await leitor.redefinirSenha(novaSenha, ra)
    res.status(201).json({ success: "Senha alterada com suscesso" })
  } catch (err) {
    console.log(err)
    res.status(500).json(err.message)
  }

})

export default router;
