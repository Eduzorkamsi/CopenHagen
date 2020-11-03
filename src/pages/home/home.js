import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Content from "../../pages/content/content";
import "./home.css";
import Arrow1 from "../../assets/icons/Arrow1.svg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="mobilebanner">
          <h4 className="bannertext1">WE OFFER THE BEST</h4>
          <h1 className="bannertext2">REAL-ESTATE</h1>
          <h5 className="bannertext3">
            Our area of specialization includes; Surveying, Architecture,
            Engineering, Project Management, e.t.c.
          </h5>
          <img alt="" className="arrow1" src={(Arrow1)}/>
        </div>
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default Home;
