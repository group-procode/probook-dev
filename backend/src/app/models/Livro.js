process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// TODO: pesquisar uma forma de remover essa variavel

import conexaoDb from "../../config/database.js";


/**
 * Classe da tabela livro
 */
class Livros {
    async livrosSearch(cod_livro) {
        return await conexaoDb("livro").where({ isbn: cod_livro }).first().then((livro) => livro)
    }
}

export default Livros;