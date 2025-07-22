import { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Service from '../pages/Service';
import Pay from '../pages/Pay';
import { parseJwt } from '../utils/DecodedToken';

function App({ mode }) {
  const token = localStorage.getItem('token');
  const decodedToken = token ? parseJwt(token) : null;

  const handleGoPay = () => {
    localStorage.setItem("advisorType", "General")
    localStorage.setItem("advisorCost", 50000)
  }

  useEffect(() => {
    localStorage.removeItem('isChangePassword')
  }, [])
  
  return (
    <div className='body'>
      <header className="header">
        <Link title='Inicio' to='/'>
          <img className="icon" src="/casa.png" alt="Inicio" />
        </Link>
        <Link title='Perfil' to={decodedToken ? '/profile' : '/login'}>
          <img className="icon" src="/perfil.png" alt="Perfil" />
        </Link>
        <Link onClick={handleGoPay} title='Asesoria' to={decodedToken ? '/pay' : '/login'}>
          <img className="icon" src="/mensaje.png" alt="Asesoria" />
        </Link>
      </header>

      {mode == "home" && (
        <div className="home">
          <header>
            <Link to={!decodedToken ? '/login' : '/profile'}>
              <button>
                {!decodedToken ? 'Iniciar Sesión' : decodedToken.username}
              </button>
            </Link>
            <div>
              <img className="logo" src="/justicia.png" alt="Logo" />
              <h5>PLS</h5>
            </div>
          </header>

          <div className="divHome1">
            <div className="div1">
              <img className="logo" src="/justicia.png" alt="Logo" />
              <h3>PLS</h3>
            </div>
            <div>
              <h1>ProLegal Solutions</h1>
              <h4>Servicios, consultas y abogados cualificados.</h4>
            </div>
          </div>

          <div className="divHome2">
            <h3>¿Quiénes somos?</h3>
            <p>
              En ProLegal Solutions, somos su aliado confiable en la búsqueda de soluciones legales.
              Con un equipo de expertos en diversas ramas del derecho, nos comprometemos a proteger sus
              derechos y obtener resultados efectivos.
            </p>
            <div className="div">
              <div>
                <h3>Misión</h3>
                <p>
                  Nuestra misión es ofrecer asesoría legal de excelencia, defendiendo los derechos e intereses de nuestros
                  clientes con integridad, profesionalismo y un compromiso inquebrantable hacia la justicia.
                </p>
              </div>
              <div>
                <h3>Visión</h3>
                <p>
                  Nuestra visión es ser un bufete de abogados líder en el sector, reconocido por nuestra excelencia en el
                  servicio y nuestro firme compromiso con la justicia, ofreciendo soluciones legales innovadoras.
                </p>
              </div>
            </div>
          </div>

          <div className="divHome3">
            <h1>Nuestros servicios</h1>
            <div>
              {[
                { href: "/service/general", src: "/legal.png", text: "Asesoría Legal General" },
                { href: "/service/empresarial", src: "/empresa.png", text: "Derecho Corporativo y Empresarial" },
                { href: "/service/civil", src: "/civil.png", text: "Derecho Civil" },
                { href: "/service/penal", src: "/penal.png", text: "Derecho Penal" },
                { href: "/service/laboral", src: "/laboral.png", text: "Derecho Laboral" },
                { href: "/service/familiar", src: "/familia.png", text: "Derecho Familiar" },
                { href: "/service/inmobiliario", src: "/casa.png", text: "Derecho Inmobiliario" },
                { href: "/service/administrativo", src: "/administrativo.png", text: "Derecho Administrativo" },
              ].map(({ href, src, text }) => (
                <Link key={href} to={href}>
                  <button className="stylesDiv">
                    <img className="logo" src={src} alt={text} />
                    <h4>{text}</h4>
                  </button>
                </Link>
              ))}
            </div>
          </div>

          <div className="divHome4">
            <h2>Comentarios de nuestros clientes</h2>
            <div className="div">
              {[
                { src: "/marta.png", name: "Marta", comment: "Excelente servicio legal, resolvieron mi caso de manera rápida y efectiva." },
                { src: "/carlos.png", name: "Carlos", comment: "Gracias a la orientación clara y profesional del equipo legal, pude resolver mi caso rápidamente. Su apoyo fue invaluable en todo momento." },
                { src: "/nino.png", name: "Nino", comment: "Recibí un trato excelente y una asesoría precisa que me ayudó a entender todos los aspectos legales de mi situación." },
                { src: "/sofia.png", name: "Sofia", comment: "La atención personalizada y el conocimiento profundo del equipo legal me brindaron la confianza que necesitaba para enfrentar mi caso." },
              ].map(({ src, name, comment }) => (
                <div key={name} className="div1">
                  <div>
                    <img className="icon" src={src} alt={`Foto de ${name}`} />
                    <h4>{name}</h4>
                  </div>
                  <p>{comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {mode == "login" && <Login />}

      {mode == "profile" && <Profile decodedToken={decodedToken} />}

      {mode == "service" && <Service />}

      {mode == "pay" && <Pay decodedToken={decodedToken} />}

      <footer>
        <div>
          <h3>La firma</h3>
          <p>Presentación</p>
          <p>Trabaje con nosotros</p>
          <p>Abogados</p>
        </div>
        <div>
          <h3>Redes Sociales</h3>
          <p>YouTube</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
        <div>
          <h3>Información</h3>
          <p>pls@prolegalsolution.com</p>
          <p>+57 321 577 6599</p>
          <p>Bogotá, Colombia</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
