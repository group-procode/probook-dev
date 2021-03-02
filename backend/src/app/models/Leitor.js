process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// TODO: pesquisar uma forma de remover essa variavel

import connectionDb from "../../config/database.js";
import bcrypt from "bcryptjs";

/**
 * Classe da tabela curso com todas funcionalidades relacionadas ao DB
 */
class Leitor {
  /**
   * Cadastra um novo leitor na base de dados
   *
   * @param {*novoLeitor} novoLeitor leitor a ser cadastrado.
   */
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

  /**
   * Verificador De Senhas
   */

  async verificaSenha(senhaHash,senha){

    const check =await bcrypt.compare(senha,senhaHash)
    return check
  }

  /**
   * Verifica no banco se ja existe um leitor com um ra especifico
   *
   * @param {*} ra ra do leitor.
   */
  async encontraLeitorPorRa(ra) {
    return await connectionDb("leitor")
      .where({ ra: ra })
      .first()
      .then((leitor) => leitor);
  }
}

export default Leitor;
