import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer>
      <ul>
        <li>
          <Link to={props.login ? "/" : "/HomeIn"}> Home </Link>
        </li>
        <span> -</span>
        <li>
          <Link to="/AboutUs"> Sobre Nosotros </Link>
        </li>
        <span> -</span>
        <li>
          <Link to="/Contact"> Contacto </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
