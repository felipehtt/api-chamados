import { inserirChamado } from "../repository/chamadosRepository.js";

export default async function inserirChamadoService(chamado){

    let id = await inserirChamado(chamado);

    return id;
    
}