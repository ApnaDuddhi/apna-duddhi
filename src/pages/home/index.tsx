import React from "react";

import "./style.css";
import { About, Header, InspiringQuotes, Youtube } from "./components";

const Home = () => {
  return (
    <div>
      <Header />
      <InspiringQuotes />
      <div style={{border: '2px solid pink'}}>
        <Youtube />
      </div>
      <About />
      {/* <p>home</p> */}

    </div>
  );
};

export default Home;
