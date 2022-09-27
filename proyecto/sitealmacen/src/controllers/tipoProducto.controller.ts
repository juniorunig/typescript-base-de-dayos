import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import {  tipoProducto, tipoProductoI} from '../models/TipoProducto';

export class tipoProductoController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAlltipoProducto(req: Request, res:Response){
        try {
            const tipoproducto: tipoProductoI[] = await tipoProducto.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({tipoProducto})
        } catch (error) {

        }
    }
}