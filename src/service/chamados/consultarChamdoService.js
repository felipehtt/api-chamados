import { consultarChamado } from "../../repository/chamadosRepository.js";

export default async function consultarChamadoService(){

    let registros = await consultarChamado();

    return registros;
    
}