import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Servicios from "./components/Servicios";
import Agendar from "./components/Agendar.component";
import IniciarSesion from "./components/IniciarSesion";
import PasosAgendar from "./components/PasosAgendar";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/servicios" exact component={Servicios} />
          <Route path="/agendar-cita" exact component={Agendar} />
          <Route path="/inicia-sesion" exact component={IniciarSesion} />
          <Route path="/pasos" exact component={PasosAgendar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;