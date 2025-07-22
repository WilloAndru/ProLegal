import React, { useState, useEffect } from 'react';
import BtnProfile from '../components/BtnProfile';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { formatDate } from '../utils/FormatDate';

const URL = import.meta.env.VITE_REACT_APP_API_URL;

function Profile({ decodedToken }) {
  const [asesorias, setasesorias] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getAsesories = async () => {
      const res = await axios.get(`${URL}/getAdvices`, {
        params: { username: decodedToken.username }
      });
      setasesorias(res.data.message); 
    } 
    getAsesories();
  }, [])

  const handleSingOut = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <div className="profile body">
      <div className='div body'>
        <BtnProfile
          name="Usuario"
          username={decodedToken.username}
        />
        <BtnProfile
          name="Fecha de nacimiento"
          nameData="fechaNacimiento"
          username={decodedToken.username}
          content={decodedToken.date}
          noBtn={true}
        />
        <BtnProfile
          name="Telefono"
          username={decodedToken.username}
          content={decodedToken.cellphone}
        />
        <div className='application'>
          <h4>Asesorias</h4>
          {asesorias ?
            <table>
              <thead>
                <tr>
                  <th>Asesor a cargo</th>
                  <th>Link de Reunion</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {asesorias.map((a, index) => (
                  <tr key={index}>
                    <td>{a.usuario}</td>
                    <td><a href="https://meet.google.com/qtb-uvcm-wdy">https://meet.google.com/qtb-uvcm-wdy</a></td>
                    <td>{formatDate(a.fechaReunion)}</td>
                    <td>{a.estado ? "Finalizada" : "En proceso"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            :
            <p>Aún no has solicitado ninguna asesoría</p>
          }
        </div>
        <button onClick={handleSingOut}>Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default Profile;
