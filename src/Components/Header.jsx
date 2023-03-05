import React from "react";
import Button from "./Button";

export default function Header() {
  return (
    <header>
      <div className="spacer1"></div>
      <div className="textArea">
        <div className="breadcrumbs">
          <span>CLOUD NAME</span>
          <div className="bold">
            <span>&#183;</span>
            <span>MODULE NAME</span>
          </div>
        </div>
        <h1>Header here 2 lines max lorem ipsum dolor sit</h1>
        <p>
          Maximum 3 lines of text consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam. Lorem ipsum dolor sit amet color samet gradient nice.
        </p>
        <div className="buttons">
          <Button />
          <a>Learn more</a>
        </div>
      </div>
      <div className="spacer2"></div>
      <div className="visualArea">
        <div className="imageSafeArea">
          <span>Visual Safe area</span>
        </div>
      </div>
    </header>
  );
}
