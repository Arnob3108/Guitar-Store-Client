import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const SingleCategory = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div className="w-full mt-10">
      <div className="grid gap-10 mb-8 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 sm:row-gap-6 sm:grid-cols-1 lg:px-5 xl:px-5 2xl:pl-24">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
