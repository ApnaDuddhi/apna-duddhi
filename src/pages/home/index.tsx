import React from "react";

import "./style.css";
import { About, Header, InspiringQuotes } from "./components";

const Home = () => {
  return (
    <div>
      <Header />
      <InspiringQuotes />
      <About />
      {/* <p>home</p> */}
    </div>
  );
};

export default Home;
