import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Servicios from "./components/Servicios";

function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/servicios" exact component={Servicios} />
          </Switch>
      </Router>
    </>
  );
}

export default App;