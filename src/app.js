import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import addRouters from './router.js';

const servidor = express();
servidor.use(express.json());
servidor.use(cors());

addRouters(servidor);

const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log(`--> Api subiu na porta ${PORTA}`));