import UserData from "./component/UserData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyModal from "./component/MyModal";
import NewPagination from "./component/NewPagination";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <NewPagination />
          </Route>
          <Route path="/modal/:page">
            <MyModal />
          </Route>
          <Route path="/:page">
            <NewPagination />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
