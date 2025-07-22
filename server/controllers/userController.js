import UserModel from "../models/userModel.js";
import { Op } from "sequelize";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req, res) => {
  const { username, cellphone, date, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({
      where: {
        [Op.or]: [{ usuario: username }, { telefono: cellphone }],
      },
    });

    if (existingUser) {
      const field = existingUser.usuario === username ? "usuario" : "telefono";
      return res.status(409).json({ message: `El ${field} ya está registrado` });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const user = await UserModel.create({
      usuario: username,
      contraseña: hashedPassword,
      fechaNacimiento: date,
      telefono: cellphone,
      rol: 0
    });

    const tokenPayload = {
      userId: user.id,
      username: user.usuario,
      date: user.fechaNacimiento,
      cellphone: user.telefono,
      role: user.rol
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ where: { usuario: username } });

    if (!user || !(await bcrypt.compare(password, user.contraseña))) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    const tokenPayload = {
      username: user.usuario,
      date: user.fechaNacimiento,
      cellphone: user.telefono,
      role: user.rol
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editData = async (req, res) => {
  const { username, nameData, value, cellphone } = req.body;

  try {
    const user = await UserModel.findOne({ where: { usuario: username } });

    if (!user) {
      return res.status(401).json({ message: "El usuario no está registrado" });
    }

    if (cellphone && user.telefono !== cellphone) {
      return res.status(401).json({ message: "El teléfono es incorrecto" });
    }

    let newValue = value;
    if (cellphone) {
      newValue = await bcrypt.hash(value, 8);
    }

    user[nameData] = newValue;
    await user.save();

    const tokenPayload = {
      username: user.usuario,
      date: user.fechaNacimiento,
      cellphone: user.telefono,
      role: user.rol,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

