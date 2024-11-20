import { inserirUser } from "../../repository/userRepository.js";

export default async function inserirUserService(user){

    let id = await inserirUser(user);

    return id;
    
}