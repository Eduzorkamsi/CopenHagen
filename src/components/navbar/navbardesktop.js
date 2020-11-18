import React, { Component } from "react";
// import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.css";
import copen6 from "..//../assets/images/copen6.png"

export default class DesktopNavbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
<div >

<div className="desktop_navbar" id='nav'>


 <nav>   
   <ul className="nav">
   <a class="navbar-logo" href="#" alt="logo" onClick={this.scrollToTop}>
              <img className="copen_logo" src={copen6}/>
            </a>  
       <li>  
      
        <Link
                  activeClass="active"
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  class="nav-link"
                 
                >
                  Home
                </Link></li> 
      <li>  <Link
                  activeClass="active"
                  to="AboutUs2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  class="nav-link"
                >
                  About Us
                </Link></li>
      <li>   <Link
                  activeClass="active"
                  to="OurServices"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  class="nav-link"
                >
                  Our Services
                </Link></li>
      <li> <Link
                  activeClass="active"
                  to="OurWorks"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  class="nav-link"
                >
                  Our Works
                </Link></li>
      <li> <Link
                  activeClass="active"
                  to="ContactUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  class="nav-link"
                >
                  Contact Us
                </Link></li>
   </ul>
</nav>
 
  </div>
</div>


</>
    );
  }
}
