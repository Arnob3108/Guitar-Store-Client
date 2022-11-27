import React, { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { FcCheckmark } from "react-icons/fc";
import ProductModal from "./ProductModal/ProductModal";

const Product = ({ product, setBookingProduct }) => {
  // console.log(bookingProduct);

  const {
    name,
    condition,
    GuitarType,
    img,
    original,
    resale,
    location,
    phone,
    use,
    categori_id,
    BackAndSides,
    Top,
    Fretboard,
    Neck,
    seller,
    email,
    date,
  } = product;
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="2xl:w-[90%] xl:w-[100%] lg:w-[100%] w-full overflow-hidden bg-white rounded-lg shadow-2xl shadow-gray-500 dark:bg-gray-800 relative"
      >
        <img
          className="object-cover object-center w-full h-72"
          src={img}
          alt="avatar"
        />
        <p className=" absolute text-indigo-500 font-bold p-3 hover:bg-indigo-500 hover:text-white duration-300 shadow-inner shadow-white rounded-3xl top-3 right-3 bg-black/10">
          Published On: {date}
        </p>

        <div className="flex items-center px-6 py-3 bg-gray-900">
          <div className="flex">
            <h1 className="mx-3 flex items-center line-through text-lg font-semibold text-gray-400">
              {original}
              <TbCurrencyTaka></TbCurrencyTaka>
            </h1>
            <h1 className="2xl:ml-[15rem] xl:ml-[13rem] lg:ml-[13rem] md:ml-[10rem] ml-[12rem] flex items-center text-lg font-semibold text-white">
              {resale}
              <TbCurrencyTaka></TbCurrencyTaka>
            </h1>
          </div>
        </div>

        <div className="px-6 py-4 pb-16">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {name}
          </h1>
          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <FcCheckmark></FcCheckmark>

            <h1 className="px-2 text-sm">Condition: {condition}</h1>
          </div>
          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <FcCheckmark></FcCheckmark>

            <h1 className="px-2 text-sm">GuitarType: {GuitarType}</h1>
          </div>
          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <FcCheckmark></FcCheckmark>

            <h1 className="px-2 text-sm">Top: {Top}</h1>
          </div>

          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <FcCheckmark></FcCheckmark>

            <h1 className="px-2 text-sm">Back And Sides: {BackAndSides}</h1>
          </div>

          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <FcCheckmark></FcCheckmark>

            <h1 className="px-2 text-sm">Fretboard: {Fretboard}</h1>
          </div>
          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <FcCheckmark></FcCheckmark>

            <h1 className="px-2 text-sm">Neck: {Neck}</h1>
          </div>
          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <FcCheckmark></FcCheckmark>

            <h1 className="px-2 text-sm">Location: {location}</h1>
          </div>
          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <FcCheckmark></FcCheckmark>

            <h1 className="px-2 text-sm">Seller: {seller}</h1>
          </div>
          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <FcCheckmark></FcCheckmark>

            <h1 className="px-2 text-sm">Seller Contact: {phone}</h1>
          </div>
        </div>
        <label
          htmlFor="my-modal-3"
          onClick={() => setBookingProduct(product)}
          className="btn btn-primary font-bold text-lg bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary absolute bottom-0 w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Book Now
        </label>
        {/* {bookingProduct && <ProductModal product={product}></ProductModal>} */}
      </div>
    </>
  );
};

export default Product;
