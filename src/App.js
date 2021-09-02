import "./App.css";
import UserData from "./component/UserData";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import MyModal from "./component/MyModal";

function App() {

  return (
    <Router>
        <div className="App">
                <Switch>
                  <Route exact path="/">
                     <UserData />                   
                  </Route>
                  <Route exact path="/modal">
                    <MyModal />
                  </Route>
                </Switch>
        </div>
    </Router>
 
  );
}

export default App;
