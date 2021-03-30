process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// TODO: pesquisar uma forma de remover essa variavel

import conexaoDb from "../../config/database.js";
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

    return await conexaoDb("leitor")
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

  async verificaSenha(senhaHash, senha) {
    return await bcrypt.compare(senha, senhaHash);
  }

  /**
   * Verifica no banco se ja existe um leitor com um ra especifico
   *
   * @param {*} ra ra do leitor.
   */
  async encontraLeitorPorRa(ra) {
    return await conexaoDb("leitor")
      .where({ ra: ra })
      .first()
      .then((leitor) => leitor);
  }

  /**
  * Encontra Leitor por email
  *
  * @param {*} email email do leitor.
  */
  async encontraLeitorPorEmail(email) {
    return await conexaoDb("leitor")
      .where({ e_mail: email })
      .first()
      .then((leitor) => leitor)

  }

  /**
  * Redefini senha do leitor
  *
  * @param {*} novaSenha nova senha
  */
  async redefinirSenha(novaSenha, ra) {
    // Criptografando a senha para salvar no banco com seguranca
    novaSenha = bcrypt.hashSync(
      novaSenha,
      bcrypt.genSaltSync(10),
    );

    return await conexaoDb("leitor")
      .update({ senha: novaSenha })
      .where({ ra: ra })
      .then((leitor) => leitor)

  }

}

export default Leitor;
