import React, { Component } from "react";
// import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.css";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
         <div className="">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#" onClick={this.scrollToTop}>
              CopenHagen
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link
                  activeClass="active"
                  to=""
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  class="nav-link"
                >
                  Home
                </Link>
                <Link
                  activeClass="active"
                  to="AboutUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  class="nav-link"
                >
                  About Us
                </Link>
                <Link
                  activeClass="active"
                  to="OurServices"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  class="nav-link"
                >
                  Our Services
                </Link>
                <Link
                  activeClass="active"
                  to="OurWorks"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  class="nav-link"
                >
                  Our Works
                </Link>
                <Link
                  activeClass="active"
                  to="ContactUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  class="nav-link"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        </div> 
        
      
      </>
    );
  }
}

