import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class tipoProducto extends Model {
  public nombre!: string;
  public createdAt!: Date;
  public updateAt!: Date;
}


export interface tipoProductoI {
 nombre: string;
 createdAt: Date;
 updateAt: Date;
}

tipoProducto.init(
  {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      createdAt: {
         type: DataTypes.DATE,
         allowNull: false
       },
       updateAt: {
         type: DataTypes.DATE,
         allowNull: false
       } 
  },
  {
    tableName: "tipoProducto",
    sequelize: database,
    timestamps: true
  }
);
