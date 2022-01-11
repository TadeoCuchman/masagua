import React from 'react';
import { Link, useNavigate } from 'react-router-dom'


const Nav = ({setLogin, setToken, token}) => {
  const navigate = useNavigate();
 
  if (token) {
    return (
      <nav id='nav'>
        <span>{localStorage.alias}</span>
        <br></br>
        <button id="logout" className="logout" onClick={() => { 
          localStorage.removeItem('alias')
          localStorage.removeItem('jwt')
          setToken(localStorage.jwt)
          navigate('/')}}> LogOut </button>
      </nav>
    );
  }else {
    return (
      <nav id="nav">
            <Link to='/Register'><button className='logss'> Register! </button></Link>
            <button className="logss" onClick={() => setLogin(true)}> Login! </button> 
      </nav>
    );
  }
} 

export default Nav;