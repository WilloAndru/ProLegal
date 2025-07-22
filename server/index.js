import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import router from './routes/router.js';
import { authMiddleware } from "./middleware/authMiddleware.js";

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/api', router);
app.get('/api/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Acceso concedido a contenido protegido' });
});

(async () => {
  try {
    await db.authenticate();
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
})();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
