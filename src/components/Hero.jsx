import React from "react";

function Hero() {
  return (
    <div className="Hero" style={{ backgroundColor: "#a4d4b4", height: "50vh" }}>
      <div className="container  h-100">
          <div className="row  h-100  align-items-center">
              <div className="text-center  mt-5  pt-md-5">
                <h1 className="font-weight-bold  mb-0" style={{ letterSpacing: "-2px", color: "#535353" }}>Vincent Ramos</h1>
                <h2 className="font-weight-bold  display-3  text-white  mb-3" style={{ letterSpacing: "-4px", lineHeight: "6rem", wordBreak: 'break-word' }}>UI<span className="position-relative  mx-2 font-weight-normal" style={{ top: "-7px" }}>/</span>UX&nbsp;&nbsp;Developer</h2>
                <h4 className="font-weight-normal" style={{ color: "#e4ffe3" }}>Software engineer specializing in UI/UX. I build things using HTML, CSS, and JavaScript. I have worked on websites for the likes of Lexus, ABC, FX Networks, Vizio, Microsoft and Media Temple.</h4>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Hero;