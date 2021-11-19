import React from "react";

function Footer() {
  return (
    <div className="footer text-center  py-5" style={{backgroundColor: '#e6f9ed'}}>
      <div className="container">
          <div className="row">
              <div className="col-6 text-left">
                <b>Vincent Ramos - <span className="stick-green">UI/UX Developer</span></b>
              </div>
              <div className="col-6 text-right">
                <a href="https://www.linkedin.com/in/vram1980/" target="_blank" rel="noreferrer" className="stick-green"><b>LinkedIn</b></a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/vram1980" target="_blank" rel="noreferrer" className="stick-green"><b>GitHub</b></a>&nbsp;&nbsp;&nbsp;<a href="https://www.instagram.com/vram1980/" target="_blank" rel="noreferrer" className="stick-green"><b>Instagram</b></a>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;