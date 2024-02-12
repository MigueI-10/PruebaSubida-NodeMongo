import { ObjectId } from "mongodb";
import conexionBD from "../mongodb_conector.js";

export const getClientes = async (request, response) => {
    try {


        //acceder a la BD
        const database = await conexionBD();
        const collection = database.collection("clientes");

        //indicar la instruccion MQL
        const result = await collection.find({}).toArray();

        console.log([result]);

        response.status(200).json(result);

    } catch (error) {
        response.status(500).json({
            message: 'Error en el servidor'
        })
    }

}

export const getCliente = async (request, response) => {
    try {

        const { id } = request.params;
        console.log(id);
        const database = await conexionBD();
        const collection = database.collection("clientes");

        //indicar la instruccion MQL
        const result = await collection.find({ _id: new ObjectId(id) }).toArray();

        console.log(result);

        response.status(200).json(result[0]);
        //la respuesta que devuelve el servidor

    } catch (error) {
        response.status(500).json({
            message: 'Error en el servidor'
        })
    }
    // }

};

export const delCliente = async (request, response) => {
    try {
        console.log(request.params);

        const { id } = request.params

        const database = await conexionBD();
        const collection = database.collection("clientes");

        //indicar la instruccion MQL
        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        console.log(result);

        if (result.deletedCount == 0) {
            return response.status(400).json({
                message: "El cliente no existe"
            })
        } else {
            return response.status(200).json({
                message: "El cliente ha sido borrado"
            })
        }//la respuesta que devuelve el servidor

    } catch (error) {
        response.status(500).json({
            message: 'Error en el servidor'
        })
    }

};

export const addCliente = async (request, response) => {
    try {
        console.log(request.body);

        const { nameCliente, emailCliente, tlfnoCliente, empresaCliente } = request.body;

        //acceder a la BD
        const database = await conexionBD();
        const collection = database.collection("clientes");
        //indicar la instruccion MQL
        const result = await collection.insertOne({
            nameCliente, emailCliente, tlfnoCliente, empresaCliente
        });

        console.log([result]);

        response.status(201).json(result);

    } catch (error) {
        response.status(500).json({
            message: 'Error en el servidor'
        })
    }

};

export const updateCLiente = async (request, response) => {
    try {
        console.log(request.body);
        //sacamos los datos
        const { nameCliente, emailCliente, tlfnoCliente, empresaCliente } = request.body;
        const { id } = request.params;

        const database = await conexionBD();
        const collection = database.collection("clientes");

        //indicar la instruccion MQL
        const result = await collection.updateOne({ _id: new ObjectId(id) }
            , { $set: { nameCliente, emailCliente, tlfnoCliente, empresaCliente } });

        console.log(result);


        if (result.modifiedCount == 0) {
            return response.status(400).json({
                message: "El usuario no existe"
            })
        } else {
            return response.status(200).json({
                message: "El usuario ha sido actualizado"
            })
        }

    } catch (error) {
        response.status(500).json({
            message: 'Error en el servidor'
        })
    }
    //response.status(201).json({ id: result.insertId }); //la respuesta que devuelve el servidor

};

export const patchCliente = async (request, response) => {
    try {
        console.log(request.body);
        //sacamos los datos
        const { nameCliente, emailCliente, tlfnoCliente, empresaCliente } = request.body;
        const { id } = request.params;

        const database = await conexionBD();
        const collection = database.collection("clientes");

        //indicar la instruccion MQL
        const result = await collection.updateOne({ _id: new ObjectId(id) }
            , { $set: { nameCliente, emailCliente, tlfnoCliente, empresaCliente } });

        console.log(result);


        if (result.modifiedCount == 0) {
            return response.status(400).json({
                message: "El usuario no existe"
            })
        } else {
            return response.status(200).json({
                message: "El usuario ha sido actualizado"
            })
        }

    } catch (error) {
        response.status(500).json({
            message: 'Error en el servidor'
        })
    }

};

//patch es por si queremos hacer update sin tocar algun campo