"use strict"

//instalar el paquete express
/**
 * El paquete express es el framework de backend mas popular de node
 * Proporciona un conjunto de herramientas para aplicaciones web, peticiones y respuestas http
 * enrutamiento y middleware para construir y desplegar aplicaciones a gran escala
 */

import express from 'express'; //al ser un fichero de node js, no es necesario poner el .js
import routerCliente from './routes/clientes.routes.js'; //siempre se pone
import routerLogin from './routes/login.routes.js';
import cors from 'cors';

import {PORT} from './config.js'

const app = express(); //creamos el objeto con la instancia express

//habilitar el cors, que es para que podamos hacer la peticion sin problemas
app.use(cors())

//para que responda a un endpoint, representa una accion de la api
//middleware
app.use(express.json());
app.use(routerCliente);
app.use(routerLogin);


//configurar el puerto
//const PORT = 3000;


//controlar si se pasa una ruta en la url
app.use((request, response) =>{
    response.status(404).json({
        message: "Endpoint no encontrado"
    })
})

//hacer que el servidor se ponga a la escucha por el puerto 3000
app.listen(PORT, ()=>{
    console.log("escuchando solicitudes");
});