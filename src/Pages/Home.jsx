import React from 'react';
import {useState} from 'react'
import Spiner from '../Components/Spiner'
import Bwt from '../Components/Bwt'

const Home = () => {
    const [nombre, setNombre] = useState('')
    const [mail, setMail] = useState('')
    const [direccion, setDireccion] = useState('')
  
    const [spiner, setSpiner] = useState(false)
  
    const handleSubmit = (event) => {
      event.preventDefault();
    };
  
    const insertClient = () => {
      try{
        const newClient = {
          nombre,
          mail,
          direccion
        }
  
        fetch("https://masaguabd.herokuapp.com/clients/newClient", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newClient)
        }).then(function(respuesta) {
            return respuesta.json();
        }).then(function (res) {
            if (!res.succes) {
                setSpiner(false)
                alert (res.message);
            } else {
                alert (res.message);
                setSpiner(false)
                setNombre('')
                setMail('')
                setDireccion('')
            }   
        })
    } catch (err) {
        alert('Error con conexión al servidor.')
    }
    }
    return (
        <main>  
        <header>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bwt.com%2Fde%2F-%2Fmedia%2Fbwt%2Fbwtcom%2Fimage-gallery%2Fbwt-und-der-sport%2Fmotorsport-2020%2F01_122955_u5i8750_1280x640.jpg%3Frev%3Ddeefdac4ae9f41ad8028b322da00a718%26h%3D320%26w%3D640%26la%3Dde%26hash%3DD97DB85D81D5FFF745AA9EA1E8D29E149C33FE58&f=1&nofb=1" alt="bwt f1" />
          <h1>¡Inscribite para obtener tu jarra!</h1>
          <h5>Confirmá ser cliente nuestro en tu mail y accedé a los beneficios de más agua.</h5>
          <div> 
            {spiner ?
            <Spiner/> :
            <form method="POST" id="register-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value) }/>
              <input type="email" placeholder="Mail" onChange={(e) => setMail(e.target.value)}/>
              <input type="text" placeholder="Dirección" onChange={(e) => setDireccion(e.target.value)}/>
              <input type="submit" className="submit" value="Inscribirse" onClick={() => {
                setSpiner(true)
                insertClient()
              }}/>
            </form> 
            }
          </div> 
        </header>
        <aside>
          <Bwt />
          <br/>
          <p>Filtramos tu agua y añadimos magnesio para que tengas el mejor agua directamente del grifo.
          <br/>
          ¡Ayúdanos a reducir el consumo de plástico! </p>
          <div className="burbujas">
              <img src="./burbuja.png" alt="" />
              <img src="./burbuja.png" alt="" />
              <img src="./burbuja.png" alt="" />
              <img src="./burbuja.png" alt="" />
              <img src="./burbuja.png" alt="" />
          </div>
        </aside>
        <div id='footer'></div>
      </main>
    );
};

export default Home;