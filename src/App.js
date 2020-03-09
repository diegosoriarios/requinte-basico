import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Home from './pages/Home'
import logo from "./assets/img/logo.svg"
import './assets/css/style.css'
import './assets/css/fixed.css'
import './assets/css/social.css'
import './assets/css/bootstrap-4.1.3-dist/css/bootstrap.css'
import Footer from "./components/Footer";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Acessorios from "./pages/Acessorios";
import BoardContext from './services/context'

export default function App() {
  const [productOpen, setProductOpen] = useState(false)
  
  function changeProductOpen(bool) {
    setProductOpen(bool)
  }
  return (
    <BoardContext.Provider value={{ productOpen, changeProductOpen }}>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <Link className="navbar-brand" style={{marginLeft: '5%', marginRight: '5%'}} to="/"><img src={logo} alt="logo" /></Link>
    
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item marginzinha">
                  <Link className="nav-link" onClick={() => setProductOpen(false)} to="/produtos">Produtos</Link>
                </li>
                <li className="nav-item marginzinha">
                  <Link className="nav-link" to="/acessorios">Acessórios</Link>
                </li>
                <li className="nav-item marginzinha">
                  <Link className="nav-link" to="/contato">Contato</Link>
                </li>
              </ul>
            </div>

          </nav>
          
          <Switch>
            <Route path="/contato">
              <Contato />
            </Route>
            <Route path="/acessorios">
              <Acessorios />
            </Route>
            <Route path="/produtos">
              <Produtos />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </BoardContext.Provider>
  );
}