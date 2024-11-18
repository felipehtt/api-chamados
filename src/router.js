import chamadoController from './controller/chamadoController.js';

export default function addRouters(servidor){

    servidor.use(chamadoController);
    
}