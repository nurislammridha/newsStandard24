import React from "react";
import AllCountry from "../AllCountry";
import Footer from "../Footer";
import Header from "../Header";
import MyNavbar from "../MyNavbar";
import SinglePageBottom from "./SinglePageBottom";

const SinglePage = () => {
  return (
    <>
      <div className="container all-element">
        <Header />
        <MyNavbar />

        <div className="pro-body fixed-width">
          <AllCountry />
          <SinglePageBottom />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SinglePage;
