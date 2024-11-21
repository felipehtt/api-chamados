import { consultarUser } from "../../repository/userRepository.js";

export default async function consultarUserService(){

    let registros = await consultarUser();

    return registros;
    
}