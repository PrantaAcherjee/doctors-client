import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appoinment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <div className="App">
       <Router>
       <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointment">
             <Appointment/>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
             <Register></Register>
          </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
