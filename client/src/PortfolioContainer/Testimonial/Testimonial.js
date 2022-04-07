import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import hack from "../../../src/img/Testimonial/hack.png";
import chef from "../../../src/img/Testimonial/chef.jpg";
import leet from "../../../src/img/Testimonial/Leet.png";
import shape from "../../../src/img/Testimonial/shape-bg.png";
import inter from "../../../src/img/Testimonial/interview.jpg";
export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: false,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    items : 1,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
      1500: {
        items: 4,
      },

    },
  };
  return (
    <div>
      <ScreenHeading
        title={"My Coding Profiles"}
        yes={true}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12 ">
              <div className="card card-01 height-fix">
          <img className="card-img-top" src={hack} alt="Card image cap" style={{height:'300px'}}/>
          <div className="card-img-overlay">
            <h4 className="card-title"><strong>HackerRank</strong></h4>
          </div>
        </div>
              </div>
              <div className="col-lg-12">
              <div className="card card-01 height-fix">
          <img className="card-img-top" src={chef} alt="Card image cap" style={{height:'300px'}}/>
          <div className="card-img-overlay">
            <h4 className="card-title"><strong>CodeChef</strong></h4>
          </div>
        </div>
 
  </div>
  <div className="col-1g-12">
  <div className="card card-01 height-fix">
          <img className="card-img-top" src={leet} alt="Card image cap" style={{height:'300px'}}/>
          <div className="card-img-overlay">
            <h4 className="card-title"><strong>LeetCode</strong></h4>
          </div>
        </div>

  </div>
  <div className="col-lg-12">
  <div className="card card-01 height-fix">
          <img className="card-img-top" src={inter} alt="Card image cap"style={{height:'300px'}}/>
          <div className="card-img-overlay">
            <h4 className="card-title"><strong>InterviewBit</strong></h4>
          </div>
        </div>
</div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="image not responding" />
      </div>
    </div>
  );
}
