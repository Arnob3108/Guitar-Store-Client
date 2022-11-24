import React, { useState } from "react";
import Loader from "../../Components/Loader/Loader";
import Advertisement from "./Advertisement/Advertisement";
import Banner from "./Banner/Banner";
import AllCategories from "./Categories/AllCategories";
import Shop from "./Shop/Shop";

const Home = () => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <Banner></Banner>
      <Advertisement></Advertisement>
      <AllCategories setLoading={setLoading}></AllCategories>
      <Shop></Shop>
    </div>
  );
};

export default Home;
