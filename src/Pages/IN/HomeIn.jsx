import React from "react";
import Aside from "../../Components/IN/Aside";
import Bwt from "../../Components/Bwt";
import "./HomeIn.css";

const HomeIn = (login) => {
  return (
    <div>
      <Aside />
      <div className="main">
        <div className="container-bwt ">
          <Bwt login={login} />
        </div>
        <br />
        <span>
          Estas adentro! -encargar productos -calculo de tiempo por filtro por
          jarra por familia -configurar mails de aviso o mensajes de texto
          -juegos? -informacion sobre soluciones de agua
        </span>
      </div>
    </div>
  );
};

export default HomeIn;
