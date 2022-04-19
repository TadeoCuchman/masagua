import './App.css';
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './Components/Spiner.css'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import './Components/Nav.css'
import Register from './Pages/Register'
import Login from './Components/Login'
import './Components/Login.css'
import Footer from './Components/Footer';
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs'
import HomeIn from './Pages/IN/HomeIn';


function App() {
  const [login, setLogin] = useState(false)
  const [token, setToken] = useState(localStorage.jwt)

  return (
    <div className="App">
      <Router>
          <Nav setLogin={setLogin} token={token} setToken={setToken} login={login}/>
          <Routes>
            <Route exact path='/' login={login} element={<Home />} />
            <Route exact path='/Register' element={<Register />} />
            <Route exact path='/Contact' element={<Contact />} />
            <Route exact path='/AboutUs' element={<AboutUs />} />
            {token && 
            <Route path='/HomeIn' login={login} element={<HomeIn />}  />}

            
              
          </Routes>

        {login && <Login setLogin={setLogin} setToken={setToken}/>}
        <Footer login={login} />
      </Router>
    </div>
  );
}

export default App;
