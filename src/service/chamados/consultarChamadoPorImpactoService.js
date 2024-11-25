import { consultarChamadoPorImpacto } from "../../repository/chamadosRepository.js";

export default async function consultarChamadoPorImpactoService(impacto){

    let registros = await consultarChamadoPorImpacto(impacto);

    if(registros == 0){

        throw new Error('Nenhum impacto deste tipo.')
    }

    return registros;

}