import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import {  Producto, ProductoI} from '../models/Producto';

export class ProductoController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllProductos(req: Request, res:Response){
        try {
            const producto: ProductoI[] = await Producto.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({producto})
        } catch (error) {

        }
    }
}