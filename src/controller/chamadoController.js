import { Router } from "express";
const endpoints = Router();

import inserirChamadoService from "../service/inserirChamadoService.js";
import consultarChamadoService from "../service/consultarChamdoService.js";
import consultarChamadoPorIdService from "../service/consultarChamadoPorIdService.js";
import alterarChamadoService from "../service/alterarChamadoService.js";
import deletarChamadoService from "../service/deletarChamadoService.js";


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

export default endpoints;