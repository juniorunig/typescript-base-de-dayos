import { Request, Response, Application, Router } from "express";

import { tipoProductoController } from '../controllers/tipoProducto.controller';

export class TipoProductoRoutes {
    public tipoProductoController: tipoProductoController =  new tipoProductoController();

    public routes(app: Application): void {
        app.route("/tipoProducto/test").get(this.tipoProductoController.test)
        app.route("/tipoProducto").get(this.tipoProductoController.getAlltipoProducto)
    }
}
