import conexion from "../mysql_connector.js";

export const getClientes = async (request, response) => {
    try {
        const result = await conexion.query("SELECT * FROM clientes");

        console.log(result);
        response.status(200).json(result[0]);
    } catch (error) {
        response.status(500).json({
            message: 'Error en el servidor'
        })
    }

}

export const getCliente = async (request, response) => {
    try {
        console.log(request.params);

        const { id } = request.params

        const [result] = await conexion.query("SELECT * FROM clientes WHERE id=?", [id]);

        console.log(result);
        response.status(200).json(result); //la respuesta que devuelve el servidor

    } catch (error) {
        response.status(500).json({
            message: 'Error en el servidor'
        })
    }

};

export const delCliente = async (request, response) => {
    try {
        console.log(request.params);

        const { id } = request.params

        const [result] = await conexion.query("DELETE FROM clientes WHERE id=?", [id]);

        console.log(result);
        if (result.affectedRows == 0) {
            return response.status(400).json({
                message: "El usuario no existe"
            })
        } else {
            return response.status(200).json({
                message: "El usuario ha sido borrado"
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

        const [result] = await conexion.query("INSERT INTO clientes (nameCliente, emailCliente, tlfnoCliente, empresaCliente) VALUES (?,?,?,?)", [nameCliente, emailCliente, tlfnoCliente, empresaCliente]);

        console.log(result);
        response.status(201).json({ id: result.insertId }); //la respuesta que devuelve el servidor

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

        const [result] = await conexion.query("UPDATE clientes SET nameCliente=?, emailCliente=?, tlfnoCliente=?, empresaCliente=? WHERE id=? ", [nameCliente, emailCliente, tlfnoCliente, empresaCliente, id]);

        console.log(result);

        if (result.affectedRows == 0) {
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

        const [result] = await conexion.query("UPDATE clientes SET nameCliente=IFNULL(?, nameCliente), emailCliente=IFNULL(?, emailCliente), tlfnoCliente=IFNULL(?, tlfnoCliente), empresaCliente=IFNULL(?, empresaCliente) WHERE id=? ", [nameCliente, emailCliente, tlfnoCliente, empresaCliente, id]);

        console.log(result);

        if (result.affectedRows == 0) {
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

//patch es por si queremos hacer update sin tocar algun campo