import React from "react";
import "./content.css";
import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import Image4 from "../../assets/images/image4.png";
import Image5 from "../../assets/images/image5.png";
const Content = () => {
  return (
    <>
      <div className="content1" id="AboutUs">
        <h4 className="aboutText">ABOUT US</h4>
        <div className="bottom_border_line"></div>
        <img alt="" className="aboutImage" src={Image1} />
        <h3 className="aboutText2">Easy Real Estate</h3>
        <h5 className="aboutText3">
          Copen Services Limited is a well - articulated and organised firm with
          diversified interests in Real Estate, Construction, Services and
          Consultancy. Copen Services Limited is the fruit of the desire of a
          number of young, honest, knowledgeable and experienced professionals,
          with over 20 years cognate, post - graduation / practical experience
          in public and private service, to pool together their resources for
          the service of humanity.
        </h5>
      </div>
      <div className="content2" id="OurServices">
        <h4 className="servicesText">OUR SERVICES</h4>
        <div className="bottom_border_line"></div>
        <div className="service1">01</div>
        <h3 className="servicesText2">Residential</h3>
        <img alt="" className="servicesImage" src={Image2} />
        <h5 className="servicesText3">
          Thus far we have been involved in the acquisition, conceptualization,
          construction, intermediation, marketing and sale of Housing Estates at
          various locations within Nigeria.
        </h5>
        <div className="service2">02</div>
        <h3 className="servicesText2">Commercial</h3>
        <img alt="" className="servicesImage" src={Image3} />
        <h5 className="servicesText3">
          With the expansion of the banking and aviation industries, there has
          been an upsurge in the demand for office accommodation.
        </h5>
        <div className="service2">03</div>
        <h3 className="servicesText2">Industrial</h3>
        <img alt="" className="servicesImage" src={Image4} />
        <h5 className="servicesText3">
          Our foray into industrial type properties has opened avenues for us to
          deploy competencies in oil & gas and telecom based industries.
        </h5>
      </div>
      <div className="content3" id="OurWorks">
        <h4 className="worksText">OUR WORKS</h4>
        <div className="bottom_border_line"></div>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Image5} class="d-block w-100" alt="..." />
              <div class="hoverText">
                <div className="caption">Goshen Estate</div>
                <div className="caption_description">
                  We acquired the site from the Enugu State Government,
                  conceptualized the layout design, constructed the housing
                  units as in the approved building plans, deployed all
                  infrastructure – roads, water electricity and perimeter
                  fencing according to the development plan, including
                  surrounding works and limited beautification
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Image5} class="d-block w-100" alt="..." />
              <div class="hoverText">
                <div className="caption">Goshen Estate</div>
                <div className="caption_description">
                  We acquired the site from the Enugu State Government,
                  conceptualized the layout design, constructed the housing
                  units as in the approved building plans, deployed all
                  infrastructure – roads, water electricity and perimeter
                  fencing according to the development plan, including
                  surrounding works and limited beautification
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Image5} class="d-block w-100" alt="..." />
              <div class="hoverText">
                <div className="caption">Goshen Estate</div>
                <div className="caption_description">
                  We acquired the site from the Enugu State Government,
                  conceptualized the layout design, constructed the housing
                  units as in the approved building plans, deployed all
                  infrastructure – roads, water electricity and perimeter
                  fencing according to the development plan, including
                  surrounding works and limited beautification
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content4" id="ContactUs">
        <h4 className="servicesText">CONTACT US</h4>
        <div className="bottom_border_line"></div>
        <div className="phone_number">(042) 290 806</div>
        <div className="email_address">mail@copengroup.org.ng</div>
        <div className="address">
          Copen House, Plot 32, Ebeano Housing Estate New Haven Junction, Enugu.
        </div>
      </div>
    </>
  );
};

export default Content;
