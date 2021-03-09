import api from '../providers/ProbookApi';

class Leitor {
    /**
     *
     * @param {*} dadosLeitor
     */
    static async cadastrarLeitor(dadosLeitor) {
        return await api.post('/leitor/cad', dadosLeitor);
    }

    /**
     *
     * @param {*} credenciais
     */
    static async login(credenciais) {
        return await api.post('/leitor/login', credenciais);
    }
}

export default Leitor;
