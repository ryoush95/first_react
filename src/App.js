import Home from "./route/Home";
import Detail from "./route/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // Todo useState만들어준다.

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello!</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
