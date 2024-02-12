"use strict"

import {Router} from 'express';
import { getClientes, getCliente, delCliente, addCliente, updateCLiente, patchCliente } from '../controllers/clientes.controller.js';
import { validacion } from '../validators/clientes.validator.js'; 

const router = Router();

router.get("/clientes", getClientes);

router.get("/clientes/:id", getCliente);

router.post("/clientes", validacion, addCliente);

router.put("/clientes/:id", validacion, updateCLiente);

router.patch("/clientes/:id", patchCliente);

 router.delete("/clientes/:id", delCliente);

//el default solo se puede poner una vez en el fichero en una sola estructura
export default router; //exportamos