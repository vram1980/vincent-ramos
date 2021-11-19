import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="container-fluid" style={{ position: "absolute", top: "0" }}>
        <div className="row">
            <div className="col-6">
                <NavLink to="/">
                    <svg id="Layer_1" className="mt-4  ml-4" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.57 115.16" style={{height: "68px" }}><defs><style>{`.cls-1{fill:#fff;}`}</style></defs><title>logo</title><path class="cls-1" d="M290.83,363.89l-15.16,81.42-13.2-69.06a58.09,58.09,0,0,0-11.17,11.84l15.32,80.18c1.39.94,2.82,1.81,4.29,2.64a60,60,0,0,0,10.54,4.64c.64.22,1.29.41,1.94.61l21-112.78A60.41,60.41,0,0,0,290.83,363.89Z" transform="translate(-251.3 -363.21)"/><path class="cls-1" d="M323.28,420.26l10.08-13.42,8.55-11.41-7.13-12.38-6.36-11a59.37,59.37,0,0,0-5.42-3,60.73,60.73,0,0,0-12.62-4.46l-.34,1.81-4.35,23.37L302,409.57l-4.25,22.82-5.42,29.1-3,16.36c.41,0,.83.12,1.25.16a61,61,0,0,0,12.15.11l7.54-40.47,4.49-6,19.54,33.92a58.78,58.78,0,0,0,9.61-9.57ZM320.21,384l6,10.43-10.07,13.43-.29-.5Z" transform="translate(-251.3 -363.21)"/></svg>
                </NavLink>
            </div>
            <div className="col-6 text-right  pt-5  pr-5">
                <NavLink to="/" className="blob-btn  mr-3  text-capitalize">
                    Home
                    <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                    </span>
                    </span>
                </NavLink>

                <NavLink to="/about" className="blob-btn  mr-3  text-capitalize">
                    About
                    <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                    </span>
                    </span>
                </NavLink>

                <NavLink to="/contact" className="blob-btn  text-capitalize">
                    Resume
                    <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                    </span>
                    </span>
                </NavLink>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                </filter>
            </defs>
        </svg>
    </div>
  );
}

export default Navigation;