import React from "react";

function Footer() {
  return (
    <span>
    <div className="footer text-center  py-5  d-none  d-md-block" style={{backgroundColor: '#e6f9ed'}}>
      <div className="container">
          <div className="row">
              <div className="col-md-6  col-lg-6 text-left">
                <b>Vincent Ramos - <span className="stick-green">UI/UX Developer</span></b>
              </div>
              <div className="col-md-6  col-lg-6 text-right">
                <a href="https://www.linkedin.com/in/vram1980/" target="_blank" rel="noreferrer" className="stick-green"><b>LinkedIn</b></a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/vram1980" target="_blank" rel="noreferrer" className="stick-green"><b>GitHub</b></a>&nbsp;&nbsp;&nbsp;<a href="https://www.instagram.com/vram1980/" target="_blank" rel="noreferrer" className="stick-green"><b>Instagram</b></a>
              </div>
          </div>
      </div>
    </div>
    <div className="footer text-center  py-5  d-block d-sm-none" style={{backgroundColor: '#e6f9ed'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6  col-lg-6 text-left  pb-1  text-center">
                    <b>Vincent Ramos - <span className="stick-green">UI/UX Developer</span></b>
                </div>
                <div className="col-md-6  col-lg-6 text-left  text-center">
                    <a href="https://www.linkedin.com/in/vram1980/" target="_blank" rel="noreferrer" className="stick-green"><b>LinkedIn</b></a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/vram1980" target="_blank" rel="noreferrer" className="stick-green"><b>GitHub</b></a>&nbsp;&nbsp;&nbsp;<a href="https://www.instagram.com/vram1980/" target="_blank" rel="noreferrer" className="stick-green"><b>Instagram</b></a>
                </div>
            </div>
        </div>
    </div>
    </span>
  );
}

export default Footer;