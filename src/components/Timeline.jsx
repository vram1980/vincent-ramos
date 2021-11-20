import React from "react";

function Timeline() {
  return (
    <span>
    <h2 class="font-weight-bold  h1  my-5  pb-3  pt-3  text-center" style={{ letterSpacing: "-2px", lineHeight: "6rem", color: "#535353" }}>Experience</h2>
    <div class="wrapper">
      <div class="detail-wrapper">
        <details>
          <summary>Detail Tag 1</summary>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui explicabo perferendis ducimus provident facilis at. Laboriosam perferendis, earum nam eveniet eaque vitae ea, optio quaerat minus, nihil beatae harum?</p>
        </details>
      </div>
      <div class="detail-wrapper">
        <details>
          <summary>Detail Tag 2</summary>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui explicabo perferendis ducimus provident facilis at. Laboriosam perferendis, earum nam eveniet eaque vitae ea, optio quaerat minus, nihil beatae harum?</p>
        </details>
      </div>
      <div class="detail-wrapper">
        <details>
          <summary>Detail Tag 3</summary>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui explicabo perferendis ducimus provident facilis at. Laboriosam perferendis, earum nam eveniet eaque vitae ea, optio quaerat minus, nihil beatae harum?</p>
        </details>
      </div>
      <div class="detail-wrapper">
        <details>
          <summary>Detail Tag 4</summary>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui explicabo perferendis ducimus provident facilis at. Laboriosam perferendis, earum nam eveniet eaque vitae ea, optio quaerat minus, nihil beatae harum?</p>
        </details>
      </div>
    </div>
    </span>
  );
}

export default Timeline;