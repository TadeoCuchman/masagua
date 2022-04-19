import React from "react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import "./Aside.css";

const Aside = (props) => {
  const nodeRef = React.useRef(null);
  const [openAside, setAside] = useState(false);

  return (
    <>
      <div
        className="asideCerrado"
        onMouseEnter={() => setAside(true)}
        onMouseLeave={() => setAside(false)}
      ></div>
      {openAside && (
        <CSSTransition
          nodeRef={nodeRef}
          in={true}
          appear={true}
          timeout={200}
          unmountOnExit
          classNames="asideStyle"
        >
          <div
            className="asideIn"
            onMouseEnter={() => setAside(true)}
            onMouseLeave={() => setAside(false)}
          >
            <div className="navSpace"></div>
            <div className="profilAside">
              <Link to="./">
                <span id="profilname">{localStorage.alias}</span>
              </Link>
              <img
                id="profilphoto"
                src="./unknown.jpg"
                alt="default profile photo"
              />
            </div>
            <div className="midAside">
              <AsideLinks rol={props.rol} />
            </div>
            <div className="navSpace"></div>
          </div>
        </CSSTransition>
      )}
    </>
  );
};

const AsideLinks = (props) => {
  return (
    <ul className="linksAside">
      <AsideLink to="Contactos" goto="./" />
      <AsideLink to="Clientes" goto="./" />
      <AsideLink to="Plantas" goto="./" />
      {props.rol == "admin" && <AsideLink to="Operarios" goto="./" />}
      <AsideLink to="Stock" goto="./" />
      {props.rol == "admin" && <AsideLink to="Info" goto="/Info"></AsideLink>}
      {props.rol == "admin" && <AsideLink to="Gastos" goto="./"></AsideLink>}
      <AsideLi to="Trabajos">
        <AsideLink to="Trabajos en proceso" goto="./" />
        {props.rol == "admin" && (
          <AsideLink to="Trabajos terminados" goto="./" />
        )}
        {props.rol == "admin" && (
          <AsideLink to="Trabajos facturados" goto="./" />
        )}
      </AsideLi>
    </ul>
  );
};

const AsideLi = (props) => {
  const [open, cambiarOpen] = useState(false);

  return (
    <>
      <li
        className="asideLi"
        onClick={() => {
          cambiarOpen(!open);
          setTimeout(() => {
            cambiarOpen(false);
          }, 30000);
        }}
      >
        {open ? " vv " : " ∞ "}
        {props.to}
      </li>
      {open && props.children}
    </>
  );
};

const AsideLink = (props) => {
  return (
    <Link className="asideLink" to={props.goto}>
      <li>∞{props.to}</li>
    </Link>
  );
};

export default Aside;
