import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Venta extends Model {
  public fechaVenta!: Date;
  public SubTotal!: number;
  public impuesto!: number;
  public descuento!: number;
  public total!: number;
  public cratedAt!: Date;
  public Actualizado!: Date;

}

export interface VentaI {
    fechaVenta: Date;
    SubTotal: number;
    impuesto: number;
    descuento: number;
    total: number;
    cratedAt: Date;
    Actualizado: Date;
}

Venta.init(
  {
    fechaVenta: {
        type: DataTypes.DATE,
        allowNull: false
      },
    subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
    impuesto: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: true
      },
    descuento: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      createAt: {
        type: DataTypes.DATE,
        allowNull: false
      } ,
      actualizado: {
        type: DataTypes.DATE,
        allowNull: false
      }  
  },
  {
    tableName: "venta",
    sequelize: database,
    timestamps: true
  }
);
