import dotenv from 'dotenv';
import TransactionModel from '../models/transactionModel.js';
import UserModel from "../models/userModel.js";

dotenv.config();

export const pay = async (req, res) => {
  const { username, valor, tipo, descripcion } = req.body;

  try {
    const user = await UserModel.findOne({ where: { usuario: username } });

    const fechaReunion = new Date();
    fechaReunion.setDate(fechaReunion.getDate() + 3);

    const formattedFechaReunion = fechaReunion.toISOString().slice(0, 19).replace("T", " ");

    const transaction = await TransactionModel.create({
      idCliente: user.id,
      idAsesor: 0,
      valor: valor,
      tipo: tipo,
      descripcion: descripcion,
      fechaReunion: formattedFechaReunion,
      estado: false
    });

    res.status(200).json({ message: "Transacción realizada con éxito" });
  } catch (error) {
    console.error("Error al realizar la transacción:", error);
    res.status(500).json({ message: error.message });
  }
};


export const getAdvices = async (req, res) => {
  const { username } = req.query;

  try {
    const user = await UserModel.findOne({ where: { usuario: username } });

    const userId = user.id;

    const transactions = await TransactionModel.findAll({ 
      where: { idCliente: userId },
      attributes: ['idAsesor', 'fechaReunion', 'estado'],
    });

    const asesor = await UserModel.findOne({ where: { id: transactions[0].idAsesor }});
    const userAsesor = asesor.usuario;

    const lista = transactions.map(t => ({
      usuario: userAsesor,
      fechaReunion: t.fechaReunion,
      estado: t.estado
    }));

    res.status(200).json({ message: lista });
  } catch (error) {
    console.error("Error al realizar la transacción:", error);
    res.status(500).json({ message: error.message });
  }
};
