import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import {  ProductoVenta, ProductoVentasI} from '../models/ProductoVenta';

export class ProductoVentaController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllproductoVenta(req: Request, res:Response){
        try {
            const productoventa: ProductoVentasI[] = await ProductoVenta.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({productoventa})
        } catch (error) {

        }
    }
}