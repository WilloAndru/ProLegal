import axios from 'axios';
import React, { useState } from 'react';

const URL = import.meta.env.VITE_REACT_APP_API_URL;

function Pay({ decodedToken }) {
  const [formData, setFormData] = useState({
    descripcion: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateCardNumber = (number) => /^[0-9]{16}$/.test(number);
  const validateExpiryDate = (date) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(date);
  const validateCVV = (cvv) => /^[0-9]{3,4}$/.test(cvv);

  const handleForm = async (event) => {
    event.preventDefault();

    const { descripcion, cardNumber, expiryDate, cvv, } = formData;

    if (!validateCardNumber(cardNumber)) {
      setError("El número de tarjeta debe contener 16 dígitos.");
      return;
    }

    if (!validateExpiryDate(expiryDate)) {
      setError("La fecha de expiración debe tener el formato MM/AA.");
      return;
    }

    if (!validateCVV(cvv)) {
      setError("El CVV debe contener 3 o 4 dígitos.");
      return;
    }

    try {
      const data = {
        username: decodedToken.username,
        valor: localStorage.getItem("advisorCost"),
        tipo: localStorage.getItem("advisorType"),
        descripcion: descripcion,
      }
      await axios.post(`${URL}/pay`, data);
      setError("")
      setSuccess("Pago realizado con éxito. Pronto nos pondremos en contacto con usted.");
    } catch (error) {
      setError(error.response?.data?.message || "Ocurrió un error");
    }
  };

  return (
    <div className='pay body'>
      {(error || success) && <div className={error ? 'error' : 'success'}>{error ? error : success}</div>}

      <form onSubmit={handleForm}>
        <h3>Usted ha escogido la asesoría de tipo {localStorage.getItem("advisorType")}</h3>
        <p>Por favor, llene el método de pago y la descripción de su caso</p>

        <label htmlFor="descripcion">Descripción breve de la consulta</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          required
        ></textarea>

        <div className="div1">
          <label>Información de la tarjeta</label>
          <input
            required
            name="cardNumber"
            className="Input input1"
            type="text"
            placeholder="1234 1234 1234 1234"
            value={formData.cardNumber}
            onChange={handleChange}
          />
          <input
            required
            name="expiryDate"
            type="text"
            placeholder="MM/AA"
            value={formData.expiryDate}
            onChange={handleChange}
          />
          <input
            required
            name="cvv"
            className="input2"
            type="text"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleChange}
          />
          <input
            required
            name="cardHolderName"
            className="Input"
            type="text"
            placeholder="Nombre completo"
            value={formData.cardHolderName}
            onChange={handleChange}
          />
        </div>

        <label>Costo consulta inicial</label>
        <h3 className='costo'>{Number(localStorage.getItem("advisorCost")).toLocaleString('es-ES')} COP</h3>

        <button type="submit">Enviar consulta</button>
      </form>
    </div>
  );
}

export default Pay;
