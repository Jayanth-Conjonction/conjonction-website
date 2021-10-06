import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import RouteWrapper from "./components/router/RouteWrapper";
import Home from "./containers/Home";
import CGU from "./legal_notice/CGU";

function App() {
  return (
    <Router>
      <Switch>
        <RouteWrapper exact path="/" layout="regular" component={Home} />
        <RouteWrapper exact path="/cgu" component={CGU} layout="" />
      </Switch>
    </Router>
  );
}

export default App;
