import { Request, Response, Application, Router } from "express";

import { ProductoController } from '../controllers/producto.controller';

export class ProductoRoutes {
    public ProductoController: ProductoController =  new ProductoController();

    public routes(app: Application): void {
        app.route("/productoss/test").get(this.ProductoController.test)
        app.route("/productos").get(this.ProductoController.getAllProductos)
    }
}
