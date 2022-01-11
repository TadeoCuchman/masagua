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


function App() {
  const [login, setLogin] = useState(false)
  const [token, setToken] = useState(localStorage.jwt)

  return (
    <div className="App">
      <Router>
          <Nav setLogin={setLogin} token={token} setToken={setToken}/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Register' element={<Register />} />
            <Route exact path='/Contact' element={<Contact />} />
            <Route exact path='/AboutUs' element={<AboutUs />} />

            
              
          </Routes>

        {login && <Login setLogin={setLogin}/>}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
