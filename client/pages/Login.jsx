import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_REACT_APP_API_URL;

function Login() {
  const [isLogin, setisLogin] = useState(true);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [error, seterror] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    cellphone: "",
    date: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isChangePassword", false);
    setIsChangePassword(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (isChangePassword || !isLogin) {
      if (formData.password !== formData.confirmPassword) {
        seterror("Las contraseñas no coinciden");
        return false;
      }
    }
    if (!isLogin && !/^\d{10}$/.test(formData.cellphone)) {
      seterror("El número de teléfono debe tener 10 dígitos");
      return false;
    }
    return true;
  };

  const changeToForgot = () => {
    localStorage.setItem("isChangePassword", true);
    setIsChangePassword(true);
    setisLogin(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const endpoint = isChangePassword
      ? `${URL}/editData`
      : isLogin
      ? `${URL}/login`
      : `${URL}/register`;

    const { confirmPassword, ...dataToSend } = formData;
    const data = isChangePassword
      ? {
          username: formData.username,
          nameData: "contraseña",
          value: formData.password,
          cellphone: formData.cellphone,
        }
      : isLogin
      ? { username: formData.username, password: formData.password }
      : dataToSend;

    try {
      const response = await axios.post(endpoint, data);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      seterror(error.response?.data?.message || "Ocurrió un error");
    }
  };

  return (
    <div className="login body">
      {error && <div className="error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <img className="icon" src="mensaje.png" alt="Icono de mensaje" />
          <h4>
            {isChangePassword
              ? "Restaurar contraseña"
              : isLogin
              ? "Iniciar sesión"
              : "Registro"}
          </h4>
        </div>

        <div className="div1">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        {(!isLogin || isChangePassword) && (
          <div className="div1">
            <label htmlFor="cellphone">Teléfono</label>
            <input
              type="text"
              id="cellphone"
              name="cellphone"
              value={formData.cellphone}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {!isLogin && !isChangePassword && (
          <div className="div1">
            <label htmlFor="date">Fecha de nacimiento</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="div1">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {(!isLogin || isChangePassword) && (
          <div className="div1">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <button type="submit">
          {isChangePassword
            ? "Restaurar contraseña"
            : isLogin
            ? "Entrar"
            : "Registrarse"}
        </button>

        {!isChangePassword && (
          <a className="noneA" onClick={changeToForgot}>
            ¿Olvidaste la contraseña?
          </a>
        )}
      </form>

      {!isChangePassword && (
        <div className="div2">
          <h5>
            {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
          </h5>
          <button onClick={() => setisLogin(!isLogin)} type="button">
            {isLogin ? "Regístrate aquí" : "Iniciar sesión"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
