process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import connectionDb from "../../config/database.js";
import bcrypt from "bcryptjs";

// Classe da tabela curso com todas funcionalidades relacionadas ao DB
class Leitor {
  async cadastraLeitor(novoLeitor) {
    // Criptografando a senha para salvar no banco com seguranca
    novoLeitor.senha = bcrypt.hashSync(
      novoLeitor.senha,
      bcrypt.genSaltSync(10),
    );

    return await connectionDb("leitor")
      .insert({
        ra: novoLeitor.ra,
        nome: novoLeitor.nome,
        e_mail: novoLeitor.email,
        senha: novoLeitor.senha,
        celular: novoLeitor.celular,
        endereco: novoLeitor.endereco,
        id_faculdade: novoLeitor.idFaculdade,
        id_curso: novoLeitor.idCurso,
      })
      .returning(["ra"]);
  }
}

export default new Leitor();
