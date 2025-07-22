import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import { Link } from 'react-router-dom';

const URL = import.meta.env.VITE_REACT_APP_API_URL;

function BtnProfile(props) {
  const [isOnClick, setisOnClick] = useState(false);
  const [editedContent, setEditedContent] = useState(props.content || props.username);

  const handleSave = async (e) => {
    e.preventDefault();
    setisOnClick(!isOnClick);
    if (isOnClick) {
      const response = await axios.post(`${URL}/editData`, {
        username: props.username,
        nameData: props.nameData || props.name.toLowerCase(),
        value: editedContent,
      });
      localStorage.setItem('token', response.data.token);
    }
  }

  return (
    <form onSubmit={handleSave} className='btnProfile'>
      <div>
        <h4>{props.name}</h4>
        {!isOnClick ?
          <p>{editedContent}</p>
          :
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        }
      </div>
      {!props.noBtn && (
        !props.isPassword ?
          <button title={!isOnClick ? "Editar" : "Guardar"}>
            {!isOnClick ? <FaEdit /> : <FaRegSave />}
          </button>
          :
          <Link to='/login'>
            <button onClick={() => localStorage.setItem('isChangePassword', true)} title="Editar">
              {<FaEdit />}
            </button>
          </Link>
      )}
    </form>
  )
}

export default BtnProfile