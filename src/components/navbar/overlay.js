import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import { Link, animateScroll as scroll } from "react-scroll";
import hamburger from "..//../assets/icons/hamburger.svg";
import ex from "..//../assets/icons/ex.svg"
// import { nodeName } from "jquery";

function HamburgerOverlay() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const target = useRef(null);

  return (
    <>
      <div className="overlay_hamburger_mobile">
        <Button variant="" ref={target} onClick={() => setShow(!show)}>
        <span className="hamburger_button"><img src={hamburger}/></span>
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
            <div class="navbar-nav">
              <Button variant=""  onClick={handleClose}><img className="exmarksspot" src={ex}/></Button>  
              <Link
                activeClass="active"
                to="AboutUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                class="nav-link"
              >
               <Button variant=""  onClick={handleClose}>About Us</Button> 
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
               <Button variant=""  onClick={handleClose}> Our Services </Button>
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
               <Button variant=""  onClick={handleClose}> Our Works </Button>
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
               <Button variant=""  onClick={handleClose}> Contact Us </Button>
              </Link>
            </div>
          {/* </div> */}
        </Overlay>
      </div>
    </>
  );
}

export default HamburgerOverlay;
