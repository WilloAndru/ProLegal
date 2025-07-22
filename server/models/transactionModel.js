import db from "../config/db.js";
import { DataTypes } from "sequelize";

const TransactionModel = db.define('transactions', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idCliente: { type: DataTypes.INTEGER },
    idAsesor: { type: DataTypes.INTEGER },
    valor: { type: DataTypes.INTEGER },
    tipo: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    fechaReunion: { type: DataTypes.DATE },
    estado: { type: DataTypes.BOOLEAN },
});

export default TransactionModel