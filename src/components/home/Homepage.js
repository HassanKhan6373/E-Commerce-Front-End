import React from "react";
import NewArrival from "../body/newArrival/NewArrival";
import NewArrivalSlider from "../body/newArrival/NewArrivalSlider";
import ProductList from "../body/productList/ProductList";

import BottomFooter from "../footer/BottomFooter";
import MainFooter from "../footer/MainFooter";

import Navbar from "../navbar/mainNavbar/Navbar";

const Homepage = () => {
  return (
    <>
      <div>
        <Navbar />

        <NewArrival />
        <NewArrivalSlider />

        <ProductList />

        <MainFooter />
        <BottomFooter />
      </div>
    </>
  );
};

export default Homepage;
