import React, { useState } from "react";

import Header from "./Header";
import MyNavbar from "./MyNavbar";
import HeaderNews from "./HeaderNews";
import FocusNews from "./FocusNews";
import Capital from "./Capital";
import AllCountry from "./AllCountry";
import World from "./World";
import Sports from "./Sports";
import Entertainment from "./Entertainment";
import Commerce from "./Commerce";
import LifeLead from "./LifeLead";
import Footer from "./Footer";
const MainPage = () => {
  return (
    <>
      <div className="all-element">
        <Header />
        <MyNavbar />

        <div className="pro-body fixed-width">
          <HeaderNews />
          <FocusNews />
          <Capital />
          <AllCountry />
          <World />
          <Sports />
          <Entertainment />
          <Commerce />
          <LifeLead />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainPage;
