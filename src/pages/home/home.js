import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Content from "../../pages/content/content";
import "./home.css";
import Arrow1 from "../../assets/icons/Arrow1.svg";
import DesktopNavbar from "../../components/navbar/navbardesktop";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="mobilebanner">
        
          <DesktopNavbar/>
          <h4 className="bannertext1">WE OFFER THE BEST</h4>
          <h1 className="bannertext2">REAL-ESTATE</h1>
          <h5 className="bannertext3">
            Our area of specialization includes; Surveying, Architecture,
            Engineering, Project Management, e.t.c.
          </h5>   <Link
                activeClass="active"
                to="AboutUs"
               
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                class="nav-link"
              >
          <img alt="" className="arrow1" src={(Arrow1)}/>
          </Link>
          <Link
                activeClass="active"
                to="AboutUs2"
               
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                class="nav-link"
              >
          <img alt="" className="arrow2" src={(Arrow1)}/>
          </Link>
        </div>
        <div className="body_content">
        <Content />
      </div>
      <Footer />
          </div>
     
    </>
  );
};

export default Home;
