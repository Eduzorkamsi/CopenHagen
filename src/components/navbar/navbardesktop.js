import React, { Component } from "react";
// import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.css";

export default class DesktopNavbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
<div >
{/* <nav className="desktop_navbar">
<a class="navbar-brand" href="#" onClick={this.scrollToTop}>
              CopenHagen
            </a>
</nav> */}
<div className="desktop_navbar" id='nav'>
{/* <a class="navbar-logo" href="#" onClick={this.scrollToTop}>
              CopenHagen
            </a>  */}

 <nav>   
   <ul className="nav">
      <li>  <Link
                  activeClass="active"
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  class="nav-link"
                  onClick={this.scrollToTop}
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
