import React from "react";

function Timeline() {
  return (
    <span>
    <h2 class="font-weight-bold  h1  my-5  pb-3  pt-3  text-center" style={{ letterSpacing: "-2px", lineHeight: "6rem", color: "#535353" }}>Experience</h2>
    <div class="timeline">
    <ul>
      <li className={'mb-5  pb-4  pt-2'}>
        <div class="content">
          <h2 className={'font-weight-bold  mb-0'} style={{color: 'rgb(83, 83, 83)', letterSpacing: '-1px'}}>Bluebeam, Inc.</h2>
          <h3 className={'stick-green font-weight-bold  mb-4'}>Senior Web Developer</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
        <div className={'time  text-center'}>
          <h4>May 2016 - Present</h4>
        </div>
      </li>
      
      <li className={'mb-5  pb-4  pt-2'}>
        <div class="content">
          <h2 className={'font-weight-bold  mb-0'} style={{color: 'rgb(83, 83, 83)', letterSpacing: '-1px'}}>Media Temple</h2>
          <h3 className={'stick-green font-weight-bold  mb-4'}>Front End Architect</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
        <div className={'time  text-center'}>
          <h4>Sep 2014 - May 2016</h4>
        </div>
      </li>
      
      <li className={'mb-5  pb-4  pt-2'}>
        <div class="content">
          <h2 className={'font-weight-bold  mb-0'} style={{color: 'rgb(83, 83, 83)', letterSpacing: '-1px'}}>HUGE Inc.</h2>
          <h3 className={'stick-green font-weight-bold  mb-4'}>Senior Developer</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
        <div className={'time  text-center'}>
          <h4>Jun 2009 - Sep 2014</h4>
        </div>
      </li>
      
      <li className={'mb-5  pb-4  pt-2'}>
        <div class="content">
          <h2 className={'font-weight-bold  mb-0'} style={{color: 'rgb(83, 83, 83)', letterSpacing: '-1px'}}>American Apparel</h2>
          <h3 className={'stick-green font-weight-bold  mb-4'}>Senior Web Designer</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
        <div className={'time  text-center'}>
          <h4>Nov 2007 - Apr 2008</h4>
        </div>
      </li>
      <div style={{clear: 'both'}}></div>
    </ul>
  </div>
    </span>
  );
}

export default Timeline;