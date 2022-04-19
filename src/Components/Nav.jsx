import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ setLogin, setToken, token, login }) => {
  const navigate = useNavigate();

  if (token) {
    return (
      <nav id="nav">
        <span>
          <Link to="/HomeIn">{localStorage.alias}</Link>
        </span>
        <br></br>
        <button
          id="logout"
          className="logout"
          onClick={() => {
            login = false;
            localStorage.removeItem("alias");
            localStorage.removeItem("jwt");
            setToken("");
            navigate("/");
          }}
        >
          {" "}
          LogOut{" "}
        </button>
      </nav>
    );
  } else {
    return (
      <nav id="nav">
        <Link to="/Register">
          <button className="logss"> Register! </button>
        </Link>
        <button className="logss" onClick={() => setLogin(true)}>
          {" "}
          Login!{" "}
        </button>
      </nav>
    );
  }
};

export default Nav;
