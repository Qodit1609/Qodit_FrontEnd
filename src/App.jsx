import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MainBody } from "./MainBody";
import { CareerForm } from "./components/CareerForm";
import AdminSignIn from "./Admin/AdminSignIn";
// import'mdbreact/dist/css/mdb.css';
import Dashboard from "./Admin/dashboard";

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={MainBody} />   
          <Route path="/career" component={CareerForm}/>
          <Route exact path="/admin" component={AdminSignIn}/>
          <Route path="/admin/dashboard" component={Dashboard}/>
        </Switch>
    </Router>
  )}
export default App;
