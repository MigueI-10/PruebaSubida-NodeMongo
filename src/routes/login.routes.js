"use strict"

import {Router} from 'express';
import conexion from '../mysql_connector.js';

const router = Router();

router.get("/login", async (request, response) =>{
    //response.send("respuesta servidor con express en la ruta login");
    const [result] = await conexion.query("SELECT 1+1 AS Result");
    response.json(result[0])
})

export default router;