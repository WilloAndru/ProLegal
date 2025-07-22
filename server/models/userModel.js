import db from "../config/db.js";
import { DataTypes } from "sequelize";

const UserModel = db.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    usuario: { type: DataTypes.STRING },
    contraseña: { type: DataTypes.STRING },
    fechaNacimiento: { type: DataTypes.DATE },
    telefono: { type: DataTypes.STRING },
    rol: { type: DataTypes.INTEGER },
});

export default UserModel