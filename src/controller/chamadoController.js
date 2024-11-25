import { Router } from "express";
const endpoints = Router();

import inserirChamadoService from "../service/chamados/inserirChamadoService.js";
import consultarChamadoService from "../service/chamados/consultarChamdoService.js";
import consultarChamadoPorIdService from "../service/chamados/consultarChamadoPorIdService.js";
import consultarChamadoPorImpactoService from "../service/chamados/consultarChamadoPorImpactoService.js";
import alterarChamadoService from "../service/chamados/alterarChamadoService.js";
import deletarChamadoService from "../service/chamados/deletarChamadoService.js";


endpoints.post('/chamados', async (req, resp) => {

    try {

        let chamado = req.body;

        let id = await inserirChamadoService(chamado);

        resp.send({

            idChamado: id

        })

    }
    catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.get('/chamados', async (req, resp) => {

    try {
    
        let registros = await consultarChamadoService();

        resp.send(registros);

    }
    catch(err){
        
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.get('/chamados/:id', async (req, resp) => {

    try {
    
        let id = req.params.id;

        let chamados = await consultarChamadoPorIdService(id);

        resp.send(chamados);

    }
    catch(err){
        
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.get('/chamados/busca/:impacto', async (req, resp) => {

    try {
    
        let impacto = req.params.impacto;

        let chamados = await consultarChamadoPorImpactoService(impacto);

        resp.send(chamados);

    }
    catch(err){
        
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.put('/chamados/:id', async (req, resp) => {

    try {
    
        let id = req.params.id;

        let chamado = req.body;
        
        await alterarChamadoService(chamado, id);

        resp.send();

    }
    catch(err){
        
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.delete('/chamados/:id', async (req, resp) => {

    try {

        let id = req.params.id;
    
        await deletarChamadoService(id);
        
        resp.send();

    }
    catch(err){

        resp.status(400).send({
            erro: err.message
        })

    }

})

export default endpoints;