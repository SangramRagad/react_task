import "./App.css";
import UserData from "./component/UserData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyModal from "./component/MyModal";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <UserData />
          </Route>
          <Route exact path="/:id/modal">
            <MyModal />
          </Route>
          <Route exact path="/:id">
            <UserData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
