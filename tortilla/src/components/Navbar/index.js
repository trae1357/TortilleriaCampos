import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom"
import M from 'materialize-css/dist/js/materialize';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item


export class Navbar extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  };

  render(){
    return(
  <div>
  <nav>
    <div class="nav-wrapper red">

    <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>

      <div className="container">

        <a href="#" class="brand-logo">Tortilleria Campos</a>
      
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link 
              to="/" 
              className = {
              window.location.pathname === "/" || window.location.pathname === "/story"
              ? "nav-link active"
               : "nave-link"} >
                 Story
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className = {
              window.location.pathname === "/login" 
              ? "nav-link active" 
              : "nav-link"}>
                Login
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className = {
                window.location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"}>
                  Contact Us               
            </Link>
           </li>
        </ul>
      </div>
    </div>
  </nav>

  <ul id="slide-out" class="sidenav green">
    <li><div class="user-view">
      <div class="background">
        <img src= ".\assets" />
      </div>
      <a href="#name"><span class="white-text name">User Name</span></a>
      <a href="#email"><span class="white-text email">User@email.com</span></a>
    </div></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Main Page</a></li>
    <li><a class="waves-effect" href="#!">Deliveries Out</a></li>
    <li><a class="waves-effect" href="#!">New Client</a></li>
    <li><a class="waves-effect" href="#!">New Delivery</a></li>
    <li><a class="waves-effect" href="#!">Add User</a></li>
  </ul>

      </div>
    )
  }
}


export default Navbar;
