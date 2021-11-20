import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./timeline.css";
import * as serviceWorker from "./serviceWorker";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
} from "./components";
import Hero from "./components/Hero";

ReactDOM.render(
  <Router>
    <Navigation />
    <Hero />
    <Routes basename="/">
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();