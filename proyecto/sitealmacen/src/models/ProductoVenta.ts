import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class ProductoVenta extends Model {
  public cantidad!: string;
  public precio!: string;
  public total!: string;
  public createdAt!: Date;
  public updateAt!: Date;

}

export interface ProductoVentasI {
   cantidad: string;
  precio: string;
  total: string;
  createdAt: Date;
  updateAt: Date;
}

ProductoVenta.init(
  {
     cantidad: {
        type: DataTypes.STRING,
        allowNull: false
      },
     precio: {
        type: DataTypes.STRING,
        allowNull: false
      },
      total: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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
    tableName: "productoVenta",
    sequelize: database,
    timestamps: true
  }
);
