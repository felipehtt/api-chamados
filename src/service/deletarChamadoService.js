import { deletarChamado } from "../repository/chamadosRepository.js";

export default async function deletarChamadoService(id){

    let linhasAfetadas = await deletarChamado(id);

    if(linhasAfetadas == 0){

        throw new Error('Nenhum chamado deletado.')
        
    }
}