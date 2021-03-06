import api from '../providers/ProbookApi'

class Leitor {
    /**
     * 
     * @param {*} dadosLeitor 
     */
    async cadastrarLeitor(dadosLeitor) {
        return await api.post('/leitor/cad', dadosLeitor)
    }

    /**
     * 
     * @param {*} credenciais 
     */
    async login(credenciais) {
        return await api.post('/leitor/login', credenciais)
    }
}

export default Leitor;