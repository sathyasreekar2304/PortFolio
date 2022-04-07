import React from "react";
import "./ScreenHeading.css";
import icon1 from "../../../src/img/Testimonial/icon1.png";
import icon2 from "../../../src/img/Testimonial/icon2.png";
import icon3 from "../../../src/img/Testimonial/icon3.png";
import icon4 from "../../../src/img/Testimonial/icon4.png";
export default function ScreenHeading(props) {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span>{props.title}</span>
      </div>
      {props.subHeading ? (
        <div className="screen-sub-heading">
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
      {props.yes ? (
        <div className="colm">
            <a href="https://www.hackerrank.com/Decoder_23">
            <img src={icon2} style={{height:'25px'}}></img>
            </a>
            <a href="https://www.codechef.com/users/sreekar04">
            <img src={icon1} style={{height:'25px'}}></img>
            </a>
            <a href="https://leetcode.com/sathya_sreekar/">
            <img src={icon3} style={{height:'20px'}}></img>
            </a>
            <a href="https://www.interviewbit.com/profile/sathya_23">
            <img src={icon4} style={{height:'20px'}}></img>
            </a>
        </div>
      ):(<div></div>)}
      <div className="heading-seperator">
        <div className="seperator-line"></div>
        <div className="seperator-blob">
          <div></div>
        </div>
      </div>

    </div>
  );
}
