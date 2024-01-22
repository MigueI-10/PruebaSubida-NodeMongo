"use strict";
import {check, validationResult} from 'express-validator' 

export const validacion=[
    check("nameCliente").exists().notEmpty().isLength({min:5,max:40}).withMessage("El nombre del cliente no debe estar vacio, debe tener entre 5 y 40 caracteres"),
    check("emailCliente").exists().notEmpty().isEmail().withMessage("El email del cliente no debe estar vacio, debe tener el formato de email"),
    check("tlfnoCliente").exists().notEmpty().isLength({min:9, max:9}).withMessage("El telefono tiene que tener inimo 9 y maximo 9").isNumeric().withMessage("El telefono del cliente no debe estar vacio"),
    check("empresaCliente").exists().notEmpty().isLength({min:5, max:50}).matches(/^[A-Z][a-zñA-ZÑ0-9\s]{4,9}$/).withMessage("La empresa del cliente no debe estar vacio, debe tener 9 digitos como minimo"),
    (request,response,next)=>{

        const errors = validationResult(request)//array con tantas filas como campos valide
        if(!errors.isEmpty()){
            response.status(400).json({
                errors:errors.array() //devolver el mensaje
            })
        }else{ //todo correcto
            next();//sigue la ejecucion del siguiente middleware
        }

    }
]