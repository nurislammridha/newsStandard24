import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import MyNavbar from "../MyNavbar";
import DetailsNews from "./DetailsNews";

const NewsBlog = () => {
  return (
    <>
      <div className="container all-element">
        <Header />
        <MyNavbar />

        <div className="pro-body fixed-width">
          <DetailsNews />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default NewsBlog;
