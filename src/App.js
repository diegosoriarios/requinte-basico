import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
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

export default function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <Link className="navbar-brand" style={{marginLeft: '5%', marginRight: '5%'}} to="/"><img src={logo} /></Link>
	
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item marginzinha">
                <Link className="nav-link" to="/produtos">Produtos</Link>
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
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}