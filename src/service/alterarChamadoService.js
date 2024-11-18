import { alterarChamado } from "../repository/chamadosRepository.js";

export default async function alterarChamadoService(chamado, id){

    let linhasAfetadas = await alterarChamado(chamado, id);

    if(linhasAfetadas == 0){

        throw new Error('Nenhum chamado alterado.')
        
    }

}