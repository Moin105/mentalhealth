import React from "react";
import "./controlpage.css";
import ThreeDGraph from "../Animation/ThreeDgraph";
function Controlpage({ name }) {
  return (
    <div className="controlpage">
      <div className="left-control">
        <h2>{name ? name : "Paul"}</h2>
        <figure><ThreeDGraph/></figure>
        {/* <img src='https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b' alt='controlpage'/> */}
        <p>time span</p>
      </div>
      <div className="right-control">
        <div className="control-buttons">
          <div className="row">
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className="row">
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className="row">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controlpage;
