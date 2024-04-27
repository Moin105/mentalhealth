import React from "react";
import './selectpage.css'
import ThreeDGraph from "../Animation/ThreeDgraph";
function SelectPage() {
  return (
    <div className="page-select">
      <h2>Is it flaw that makes us Human?</h2>
      <div className="container">
        <div className="box">
          <figure><ThreeDGraph/></figure>
          <h3> Paul</h3>
        </div>
        <div className="box">
          <figure><ThreeDGraph/></figure>
          <h3> Alex</h3>
        </div>
        <div className="box">
          <figure><ThreeDGraph/></figure>
          <h3> John</h3>
        </div>
      </div>
    </div>
  );
}

export default SelectPage;
