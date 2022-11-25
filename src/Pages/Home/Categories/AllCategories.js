import React from "react";
import { Link } from "react-router-dom";

const AllCategories = ({ categories }) => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">
              Select Your Desier
              <br className="hidden md:block" />
              Guitar From Guitar Store.
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-purple-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className="text-gray-700 lg:text-sm lg:max-w-md">
            Guitar Store is specialized in top-notch brands and vintage
            instruments, but we have products for all budgets and requirements.
            Whatever are your needs, our team of professionals will make sure
            you find the best product at the best price. Due to the quality of
            our service, prestigious brands such as Echopark, Tom Anderson,
            Two-Rock, Divided by 13 or Santa Cruz Guitars have trusted us with
            their international distribution.
          </p>
        </div>
        <div className="grid gap-10 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <div key={category._id}>
              <Link
                to={`category/${category.categori_id}`}
                aria-label="View Item"
              >
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={category.img}
                    alt=""
                  />
                  <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-4xl text-center mt-[30%] font-bold text-gray-100">
                      {category.title}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
