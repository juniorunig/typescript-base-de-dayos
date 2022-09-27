import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Producto extends Model {
  public nombre!: string;
  public marca!: string;
  public precio!: number;
  public stockMin!: number;
  public cantidad!: number;
  public tipoProducto!: number;
  public createdAt!: Date;
  public updateAt!: Date;
}


export interface ProductoI {
 nombre: string;
 marca: string;
 precio: number;
 stockMin: number;
 cantidad: number;
 tipoProducto: number;
 createdAt: Date;
 updateAt: Date;
}

Producto.init(
  {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
      },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: true
      },
     stockMin: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
     cantidad: {
        type: DataTypes.FLOAT,
        allowNull: false
      } ,
      tipoProducto: {
        type: DataTypes.INTEGER,
        allowNull: false
      } ,
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
    tableName: "productos",
    sequelize: database,
    timestamps: true
  }
);
