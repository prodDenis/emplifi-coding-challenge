import React from "react";

export default function Headline({ heading, text }) {
  return (
    <div className="headline">
      <span className="dot">
        <span></span>
      </span>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
}
