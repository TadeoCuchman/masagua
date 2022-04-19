import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({ setLogin, setToken }) => {
  const [mail, changeMail] = useState("");
  const [password, changePassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const newLogin = () => {
    fetch("http://localhost:1001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mail: mail,
        password: password,
      }),
    })
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (res) {
        if (res.error) {
          alert(res.error);
          setLogin(false);
        } else {
          alert(res.data);
          localStorage.setItem("jwt", res.token);
          localStorage.setItem("alias", JSON.stringify(res.user.name));
          setToken(localStorage.jwt);
          setLogin(false);
          navigate("/HomeIn");
        }
      });
  };

  return (
    <div id="loginDiv">
      <h1>Login</h1>
      <form
        method="POST"
        className="forms"
        id="loginfrom"
        onSubmit={handleSubmit}
      >
        <button className="" onClick={() => setLogin(false)}>
          X
        </button>
        <p>Email:</p>
        <input
          className="logs"
          id="mail"
          type="email"
          name="mail"
          placeholder="Enter your Email"
          onChange={(e) => changeMail(e.target.value)}
        />
        <p>Contraseña:</p>
        <input
          className="logs"
          id="password"
          type="password"
          name="password"
          placeholder="Enter your Password"
          onChange={(e) => changePassword(e.target.value)}
        />
        <br />
        <button className="logss" type="sumbit" id="login" onClick={newLogin}>
          Entrar!
        </button>
        <br />
        <br />
        <span>....</span>
        <br />
        <p>No tenes una Cuenta Todavia?</p>
        <Link to="/Register">
          <button className="logss">Registrate!</button>
        </Link>
      </form>
      <br />
    </div>
  );
};

export default Login;
