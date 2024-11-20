import chamadoController from './controller/chamadoController.js';
import userController from './controller/userController.js';

export default function addRouters(servidor){

    servidor.use(chamadoController);
    servidor.use(userController);
    
}