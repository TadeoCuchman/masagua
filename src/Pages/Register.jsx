import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Bwt from '../Components/Bwt'



const Register = () => {    
    const [user, changeUser] = useState('')
    const [mail, changeMail] = useState('')
    const [adress, changeAdress] = useState('')
    const [password, changePassword] = useState('')
    const [birth_date, changeBirthDate] = useState('')
    const [code, changeCode] = useState('')
    let navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
      };

    const postNewUser = () => {
        const newUser = {
            name: user,
            mail,
            adress,
            birth_date,
            password,
            code,
            salt: ''
        }
      
        fetch('http://localhost:4000/users/register',{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
          }).then(function(respuesta) {
              return respuesta.json()
          }).then(function (res) {
              if (res.success === false) {
                  alert (res.message);
              } else {
                  alert (res.message);
                  navigate('/Login')                  
              }
            })
    }
    
    return (
        <div className="allPage">
            <br />
            <Bwt />
            <br />
            <h1>Registrate con el Codigo de tu Jarra!</h1>

            <form method="POST" className="forms" onSubmit={handleSubmit}>
                <p>Email:</p>
                <input className="logs" id="rmail" type="email" name="rmail" placeholder="Ingresa un Email"  onChange={(e) => changeMail(e.target.value)}/>
                <p>Nombre:</p>
                <input className="logs" id="rname" type="text" name="rname" placeholder="Ingresa un Nombre"  onChange={(e) => changeUser(e.target.value)}/>
                <p>Localidad:</p>
                <input className="logs" id="rcountry" type="text" name="rcountry" placeholder="Ingresá una Dirección"  onChange={(e) => changeAdress(e.target.value)}/>
                <p>Fecha de Nacimiento:</p>
                <input className="logs" id="rbdate" type="date" name="rbdate" placeholder="Ingresá tu fecha de nacimiento"  onChange={(e) => changeBirthDate(e.target.value)}/>
                <p>Contraseña:</p>
                <input className="logs" id="rpassword" type="password" name="rpassword" placeholder="Ingresá una Contraseña"  onChange={(e) => changePassword(e.target.value)}/>
                <p>Código:</p>
                <input className="logs" id="rcode" type="text" name="rcode" placeholder="Ingresá en código"  onChange={(e) => changeCode(e.target.value)}/>
                <button className="logss" type="sumbit" id="register" onClick={ () => { postNewUser() } } >Registrate!</button>
            </form>

            <p>Bienvenidos a la experiencia BWT.</p>
            <br />
            <br />
        </div>
    )
}

export default Register;