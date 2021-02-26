process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

import connectionDb from '../../config/database.js'

// Classe da tabela faculdade com todas funcionalidades relacionadas ao DB
class ModeloFaculdade {
    
    async cadastrarFaculdade (id,nome) {
        return await
            connectionDb('cursos')
            .insert({
                id_curso:id,
                nome:nome
            })
    }
}

export default new ModeloFaculdade