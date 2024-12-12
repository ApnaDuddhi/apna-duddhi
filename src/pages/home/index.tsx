import React from "react";

import "./style.scss";
import {
  About,
  ApnaDuddhi,
  Header,
  InspiringQuotes,
  Youtube,
} from "./components";

const Home = () => {
  return (
    <div>
      <Header />
      <InspiringQuotes />
      <div style={{ border: "2px solid pink" }}>
        <Youtube />
      </div>
      <ApnaDuddhi />
      <About />
      {/* <p>home</p> */}
    </div>
  );
};

export default Home;
