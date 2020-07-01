import React from "react";
import SideBar from "./SideBarMenu.js";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import App from './App.js';

function Home(){
  return(
    <h1>Home Page</h1>
  );
}

function About(){
  return(
    <h2>About Page</h2>
  );
}

export default function Routers(){

  return(
    <Router>
     <nav>
      <Link to="/"> Home</Link>
      <Link to="About">Launch</Link>
      <Link to="SideBar">SideBar</Link>

     </nav>
     <Switch>
           <Route path="/About">
             <About />
           </Route>
           <Route path="/App">
             <App />
           </Route>
           <Route path="/">
             <Home />
           </Route>
           <Route path="/SideBar">
             <SideBar />
           </Route>
         </Switch>
    </Router>
  );
}
