import { Request, Response, Application, Router } from "express";

import { ProductoVentaController} from '../controllers/productoVenta.controller';

export class ProductoVentaRoutes {
    public productoventacontroller: ProductoVentaController =  new ProductoVentaController();

    public routes(app: Application): void {
        app.route("/productoVenta/test").get(this.productoventacontroller.test)
        app.route("/productoVenta").get(this.productoventacontroller.getAllproductoVenta)
    }
}
