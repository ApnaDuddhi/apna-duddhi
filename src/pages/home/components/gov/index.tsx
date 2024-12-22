import React from "react";
import { villages } from "./helper";
import "./styles.scss";

// const website = [{
//   title: "",
//   url: ""
// }]

const ApnaDuddhi = () => {
  return (
    <div className="villages-container">
      <h3 className="title">Our Villages</h3>
      <div className="villages-wrapper">
        {villages.map((item) => (
          <p className="name">{item}</p>
        ))}
      </div>

      <h3 className="title">Helpful websites</h3>
    </div>
  );
};

export { ApnaDuddhi };
