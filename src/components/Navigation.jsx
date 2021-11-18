import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
      <div className="container-fluid">
        <div className="row">
            <div className="col-6">
                <NavLink to="/">Logo</NavLink>
            </div>
            <div className="col-6 text-right">
                <NavLink to="/" className="btn btn-outline-primary">
                    Home
                    <span className="sr-only">(current)</span>
                </NavLink>

                <NavLink to="/about" className="btn btn-outline-primary">
                    About
                </NavLink>

                <NavLink to="/contact" className="btn btn-outline-primary">
                    Contact
                </NavLink>
            </div>
        </div>
    </div>
  );
}

export default Navigation;