"use strict";

//importar el paquete mysql para realizar la conexion, createConnect(para pequeñas bd) y createPool(bd grandes)
import { MongoClient } from 'mongodb'//para trabajar con promesas

const URI = "mongodb+srv://mbaecab821:mbaecab821MongoDB@mongodbnodejs.g0elzwe.mongodb.net/?retryWrites=true&w=majority"

//crear la instancia de mongoDB usando la URI de conexion que nos ha dado MongoDB
const client = new MongoClient(URI);

let conexion

const conexionBD = async () => {

    try {

        if (!conexion) {
            //conectar el servidor de forma asincrona
            conexion = await client.connect();
            console.log("Conectada a la BD de MongoDB");
        }

        return conexion.db("empresadb");

    } catch (error) {
        console.log("Error!! Base de datos no conectada");
    }

};

export default conexionBD;
