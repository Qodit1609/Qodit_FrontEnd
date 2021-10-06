import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MainBody } from "./MainBody";
import { CareerForm } from "./components/Pages/CareerForm/CareerForm";
import AdminSignIn from "./Admin/AdminSignIn";
import Dashboard from "./Admin/dashboard";
import { ContactUs } from "./components/Pages/ContactUs/ContactUs";
import { Navigation } from "./components/navigation";
import JsonData from './data/data.json'
import FooterPage from "./components/Footer";
import axios from "axios";
import { MoreAboutUs } from "./components/Pages/About/MoreAbout";
import MoreServices from "./components/Pages/MoreServices/MoreServices";
import { SideBar } from "./components/Side_bar";
import Loader from "react-loader-spinner";

const App = () => {
  const [navBar , setNavBar] = useState(null);
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

const API = 'https://qoditdev.herokuapp.com';
  useEffect(()=>{
    async function getDataFromServer(){ 
      const {data:navBar} = await axios.get(`${API}/navbar/`);
      setNavBar(navBar)
    }
    getDataFromServer();
  },[])
  return (
( navBar ?
    <Router>
        {navBar && <Navigation navBar={navBar} />}
        <SideBar/>
        <Switch>
          <Route exact path="/" component={MainBody} />   
          <Route path="/career" component={CareerForm}/>
          <Route exact path="/admin" component={AdminSignIn}/>
          <Route path="/admin/dashboard" component={Dashboard}/>
          <Route path="/contact_us" component={ContactUs}/>
          <Route path="/about" component={MoreAboutUs}/>
          <Route path="/services" component={MoreServices}/>
          <Route path="/features" component={ContactUs}/>
        </Switch>
        <FooterPage data={landingPageData.Contact} />
    </Router>
    :
    <div className="loadingClass"> 
    <Loader
      type="BallTriangle"
      color="white"
      height={80}
      width={80}
    />
    </div>
)
  )}
export default App;
