import Home from "pages/Home";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "services";
export const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);
