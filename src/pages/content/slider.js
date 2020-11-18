import React, { Component } from "react";
import Slider from "react-slick";
import Image5 from "../../assets/images/image5.png";
import Image6 from "../../assets/images/image6.png"

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow:2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="image_slider">
        
        <Slider {...settings}>
          <div className="slider_item">
          <img src={Image5} className="image_slider_image" alt="..." />
          <div class="desktophoverText">
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
          <div className="slider_item">
          <img src={Image6} className="image_slider_image" alt="..." />
          <div class="desktophoverText">
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
          <div className="slider_item">
          <img src={Image5} className="image_slider_image" alt="..." />
          <div class="desktophoverText">
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
          <div className="slider_item">
          <img src={Image6} className="image_slider_image" alt="..." />
          <div class="desktophoverText">
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
          <div className="slider_item">
          <img src={Image5} className="image_slider_image" alt="..." />
          <div class="desktophoverText">
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
          <div className="slider_item">
          <img src={Image6} className="image_slider_image" alt="..." />
          <div class="desktophoverText">
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
          {/* <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div> */}
        </Slider>
      </div>
    );
  }
}
