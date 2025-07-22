import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Service() {
  const currentUrl = useLocation().pathname;
  
  const services = [
    {
      name: "General",
      pathname: "/service/general",
      title: "Descripcion del servicio de Asesoria general legal",
      description: "Nuestro servicio de asesoría general legal ofrece orientación y apoyo a individuos y empresas en una amplia gama de asuntos legales. Nuestro equipo de abogados experimentados se dedica a proporcionar soluciones prácticas y efectivas para satisfacer sus necesidades legales.",
      service1Title: "Asesoramiento Legal",
      service1: "Brindamos asesoramiento en diversas áreas del derecho, incluyendo derecho civil, derecho mercantil, derecho laboral, y derecho de familia.",
      service2Title: "Representación Legal",
      service2: "Ofrecemos representación en negociaciones, mediaciones y, si es necesario en procedimientos judiciales.",
      service3Title: "Resolución de Conflictos",
      service3: "Ayudamos a resolver disputas de manera efectiva y eficiente, buscando soluciones que minimicen el impacto en su vida personal o negocio.",
      img: "/legal.png",
      cost: 50000
    },
    {
      name: "Empresarial",
      pathname: "/service/empresarial",
      title: "Descripcion del servicio de Derecho Corporativo o Empresarial",
      description: "Nuestro servicio de asesoría en Derecho Corporativo ofrece apoyo integral a empresas de todos los tamaños, desde startups hasta corporaciones establecidas. Nuestro equipo de abogados especializados en derecho empresarial se dedica a ayudar a las organizaciones a navegar el complejo entorno legal que enfrentan en sus operaciones diarias.",
      service1Title: "Constitución y Registro de Empresas",
      service1: "Asistimos en la formación de sociedades, incluyendo la redacción de estatutos y la obtención de licencias y permisos necesarios.",
      service2Title: "Contratos Comerciales",
      service2: "Brindamos asesoramiento en la redacción, revisión y negociación de contratos comerciales, acuerdos de distribución, contratos de empleo y otros documentos esenciales.",
      service3Title: "Cumplimiento Normativo",
      service3: "Ayudamos a las empresas a cumplir con las regulaciones locales, nacionales e internacionales, asegurando que sus operaciones se alineen con las leyes aplicables.",
      img: "/empresa.png",
      cost: 100000
    },   
    {
      name: "Civil",
      pathname: "/service/civil",
      title: "Descripcion del servicio de Derecho Civil",
      description: "Nuestro servicio de asesoría en Derecho Civil está diseñado para ofrecer apoyo integral a individuos y familias en una variedad de asuntos legales. Nuestro equipo de abogados especializados en Derecho Civil se dedica a proporcionar soluciones efectivas y personalizadas para satisfacer las necesidades legales de nuestros clientes.",
      service1Title: "Contratos y Obligaciones",
      service1: "Asistimos en la redacción, revisión y negociación de contratos y acuerdos, garantizando que se ajusten a la normativa vigente y protejan sus intereses.",
      service2Title: "Responsabilidad Civil",
      service2: "Asesoramos en casos de responsabilidad civil, incluyendo demandas por daños y perjuicios, accidentes y reclamaciones de indemnización.",
      service3Title: "Resolución de Conflictos",
      service3: "Asistimos en la resolución de disputas civiles mediante mediación, arbitraje y, si es necesario, litigios.",
      img: "/civil.png",
      cost: 80000
    },     
    {
      name: "Penal",
      pathname: "/service/penal",
      title: "Descripción del servicio de Derecho Penal",
      description: "Nuestro servicio de asesoría en Derecho Penal está diseñado para ofrecer defensa legal integral a individuosque enfrentan acusaciones penales. Nuestro equipo de abogados especializados en Derecho Penal se compromete aproteger los derechos de nuestros clientes y a garantizar un proceso judicial justo y equitativo.",
      service1Title: "Defensa Penal",
      service1: "Ofrecemos defensa en una amplia gama de delitos, desde infracciones menores hasta delitos graves, incluyendo delitos contra la propiedad, delitos violentos y delitos relacionados con drogas.",
      service2Title: "Asesoramiento durante el proceso",
      service2: "Brindamos asesoría y apoyo en todas las etapas del proceso penal, desde la investigación inicial hasta la apelación, asegurando que se respeten sus derechos en todo momento.",
      service3Title: "Recursos y Apelaciones",
      service3: "Ofrecemos asesoría sobre las opciones de apelación y los recursos legales disponibles en caso de una condena.",
      img: "/penal.png",
      cost: 100000
    },
    {
      name: "Laboral",
      pathname: "/service/laboral",
      title: "Descripcion del servicio de Derecho Laboral",
      description: "Nuestro servicio de asesoría en Derecho Laboral está diseñado para brindar apoyo a empleados y empleadores en una amplia variedad de cuestiones relacionadas con el trabajo y las relaciones laborales. Nuestro equipo de abogados especializados en Derecho Laboral se compromete a garantizar que se respeten los derechos de los trabajadores y a ofrecer soluciones efectivas a los desafíos laborales que puedan surgir.",
      service1Title: "Contratos de Trabajo",
      service1: "Asistimos en la redacción y revisión de contratos laborales, asegurando que cumplan con las normativas vigentes y protejan los intereses de ambas partes.",
      service2Title: "Derechos del Trabajador",
      service2: "Brindamos asesoramiento sobre derechos laborales, incluyendo salario, horas de trabajo, licencias, y condiciones de trabajo, para asegurar que se respeten sus derechos en el lugar de trabajo.",
      service3Title: "Despidos y Terminaciones",
      service3: "Ofrecemos asistencia en casos de despido, incluyendo la revisión de la legalidad del mismo, así como en la negociación de indemnizaciones y acuerdos de salida.",
      img: "/laboral.png",
      cost: 120000
    },
    {
      name: "Familiar",
      pathname: "/service/familiar",
      title: "Descripcion del servicio de Derecho Familiar",
      description: "Nuestro servicio de asesoría en Derecho Familiar está diseñado para ofrecer apoyo legal a individuos y familias en una variedad de asuntos relacionados con las relaciones familiares y el bienestar de los miembros del hogar. Nuestro equipo de abogados especializados en Derecho Familiar se compromete a brindar soluciones efectivas y compasivas, garantizando la protección de los derechos e intereses de nuestros clientes.",
      service1Title: "Divorcio y Separación",
      service1: "Asistimos en el proceso de divorcio, incluyendo la presentación de solicitudes, la división de bienes y la negociación de acuerdos de separación.",
      service2Title: "Custodia y Visitas",
      service2: "Brindamos asesoramiento en cuestiones de custodia de menores, régimen de visitas y acuerdos de crianza, buscando siempre el bienestar del niño como prioridad.",
      service3Title: "Pensión Alimenticia",
      service3: "Ofrecemos apoyo en la determinación y modificación de pensiones alimenticias, asegurando que se respeten los derechos de los niños y las necesidades económicas de las partes involucradas.",
      img: "/familia.png",
      cost: 60000
    },
    {
      name: "Inmobiliario",
      pathname: "/service/inmobiliario",
      title: "Descripcion del servicio de Derecho Inmobiliario",
      description: "Nuestro servicio de asesoría en Derecho Inmobiliario está diseñado para ofrecer apoyo legal a individuos y empresas en todos los aspectos relacionados con la propiedad y las transacciones inmobiliarias. Nuestro equipo de abogados especializados en Derecho Inmobiliario se compromete a brindar soluciones efectivas y personalizadas, garantizando que cada operación se realice de acuerdo con la ley y protegiendo los intereses de nuestros clientes.",
      service1Title: "Compra y Venta de Propiedades",
      service1: "Asistimos en la compra y venta de bienes inmuebles, incluyendo la revisión de contratos, la realización de diligencias debidas y la negociación de términos.",
      service2Title: "Arrendamientos",
      service2: "Brindamos asesoría en la redacción y revisión de contratos de arrendamiento, así como en la resolución de disputas entre arrendadores y arrendatarios.",
      service3Title: "Desarrollo Inmobiliario",
      service3: "Ofrecemos apoyo legal en proyectos de desarrollo inmobiliario, incluyendo la obtención de permisos y licencias, y el cumplimiento de normativas locales.",
      img: "/casa.png",
      cost: 90000
    },
    {
      name: "Administrativo",
      pathname: "/service/administrativo",
      title: "Descripcion del servicio de Derecho Administrativo",
      description: "Nuestro servicio de asesoría en Derecho Administrativo está diseñado para brindar apoyo legal a ciudadanos y empresas en sus interacciones con entidades y autoridades gubernamentales. Nuestro equipo de abogados especializados en Derecho Administrativo se compromete a ofrecer soluciones efectivas y personalizadas, garantizando que los derechos de nuestros clientes sean protegidos y que se cumplan las normativas vigentes.",
      service1Title: "Trámites Administrativos",
      service1: "Asistimos en la presentación y seguimiento de solicitudes, licencias, permisos y otros trámites ante organismos gubernamentales.",
      service2Title: "Recursos Administrativos",
      service2: "Brindamos asesoría en la interposición de recursos administrativos, incluyendo apelaciones y reclamaciones contra decisiones de entidades públicas.",
      service3Title: "Contratación Pública",
      service3: "Ofrecemos asesoría a empresas en la participación en licitaciones y contratos públicos, asegurando el cumplimiento de las normativas aplicables y la defensa de sus intereses.",
      img: "/administrativo.png",
      cost: 130000
    }        
  ]

  const service = services.find(service => service.pathname === currentUrl);
  
  const handleGoPay = () => {
    localStorage.setItem("advisorType", service.name)
    localStorage.setItem("advisorCost", service.cost)
  }

  return (
    <div className="services body">
      <section className="descripcion">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </section>

      <section className="servicios">
        <div>
          <h4>Servicios incluidos</h4>
          <p>
            <b>1. Consulta Inicial:</b> Evaluamos su situación legal y discutimos sus objetivos para ofrecerle una orientación clara y precisa.
          </p>
          <p>
            <b>2. {service.service1Title}:</b> {service.service1}
          </p>
          <p>
            <b>3. {service.service2Title}:</b> {service.service2}
          </p>
          <p>
            <b>4. {service.service3Title}:</b> {service.service3}
          </p>
          <img className="logo" src={service.img} />
        </div>
        <div>
          <h4>¿Por qué elegirnos?</h4>
          <p>
            <b>Experiencia:</b> Nuestro equipo cuenta con una sólida trayectoria en la práctica legal y un profundo
            conocimiento de las leyes locales y nacionales.
          </p>
          <p>
            <b>Enfoque personalizado:</b> Adaptamos nuestros servicios a las necesidades específicas de cada cliente,
            asegurando una atención personalizada.
          </p>
          <p>
            <b>Compromiso:</b> Nos comprometemos a proteger sus derechos e intereses, brindándole un apoyo constante a
            lo largo de su proceso legal.
          </p>
          <img className="logo" src="/administrativo.png" alt="Ícono administrativo" />
        </div>
      </section>

      <section className="pago">
        <h3>Costo consulta inicial: {service.cost.toLocaleString('es-ES')} COP</h3>
        <Link to='/pay'>
          <button onClick={handleGoPay}>Llenar datos consulta</button>
        </Link>
      </section>
    </div>
  );
}

export default Service;
