import React, { useContext, useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import Advertisement from "./Advertisement/Advertisement";
import Banner from "./Banner/Banner";
import AllCategories from "./Categories/AllCategories";
import Shop from "./Shop/Shop";

const Home = () => {
  // const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [setLoading, setCategories]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <Banner></Banner>
      <Advertisement></Advertisement>
      <AllCategories
        setCategories={setCategories}
        categories={categories}
        setLoading={setLoading}
        loading={loading}
      ></AllCategories>
      <Shop></Shop>
    </div>
  );
};

export default Home;
