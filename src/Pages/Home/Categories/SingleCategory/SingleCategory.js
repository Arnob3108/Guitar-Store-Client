import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import ProductModal from "../Product/ProductModal/ProductModal";

const SingleCategory = () => {
  const products = useLoaderData();
  const [bookingProduct, setBookingProduct] = useState(null);
  console.log(products);

  return (
    <div className="w-full mt-10">
      <div className="grid lg:gap-20 md:gap-10 gap-8 mb-8 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 sm:row-gap-6 sm:grid-cols-1 lg:px-5 xl:px-5 2xl:pl-24">
        {products.map((product) => (
          <Product
            setBookingProduct={setBookingProduct}
            key={product._id}
            product={product}
          ></Product>
        ))}
      </div>
      {bookingProduct && (
        <ProductModal
          setBookingProduct={setBookingProduct}
          bookingProduct={bookingProduct}
        ></ProductModal>
      )}
    </div>
  );
};

export default SingleCategory;
