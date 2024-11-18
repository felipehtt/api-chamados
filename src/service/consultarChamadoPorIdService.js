import { consultarChamadoPorId } from "../repository/chamadosRepository.js";

export default async function consultarChamadoPorId(id){

    let registros = await consultarChamadoPorId(id);

    if(registros == 0){

        throw new Error('Nenhum chamado com este id.')
        
    }

    let chamado = registros[0];

    return chamado;

}