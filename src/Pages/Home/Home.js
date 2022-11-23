import React from "react";
import Advertisement from "./Advertisement/Advertisement";
import Banner from "./Banner/Banner";
import AllCategories from "./Categories/AllCategories";
import Shop from "./Shop/Shop";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Advertisement></Advertisement>
      <AllCategories></AllCategories>
      <Shop></Shop>
    </div>
  );
};

export default Home;
