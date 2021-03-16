process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// TODO: pesquisar uma forma de remover essa variavel

import conexaoDb from "../../config/database.js";


/**
 * Classe da tabela faculdade
 */
class Faculdades {
  async listaFaculdades(){
    return await conexaoDb("faculdades").first().then((faculdades)=>faculdades)
  }
}

export default Faculdades;
