import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import data from "../data";
const Slider = () => {
  const [recensioni, setRecensioni] = useState(data);
  const [active, setActive] = useState(0);

  return (<div className="container slider">
    {recensioni.map( (recensione, index) => {
      let positionClass = "";
      if (index === active) {
        positionClass = "active";
      } else if ( index + 1 === active || (active === 0 && index === recensioni.length - 1) ) {
        positionClass = "prev";
      } else {
        positionClass = "next";
      }
      return <Slide key={recensione.id} {...recensione} classes={positionClass} />
    })}
    <div className="btn-group slider-btn-group">
      <button className="btn btn-slider prev-slider">
        prev
      </button>
      <button className="btn btn-slider next-slider">
        next
      </button>
    </div>
  </div>);
};

export default Slider;
