import React from "react";
import bg from "../../../Assets/bg2.jpg";
import bg2 from "../../../Assets/textbg2.jpg";
import buttonbg from "../../../Assets/textbg.jpg";

const Banner = () => {
  return (
    <div
      className="hero h-[50em]"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className=" text-neutral-content">
        <div className="lg:w-[40%] md:w-[65%] mx-5 lg:ml-16">
          <h1
            style={{
              backgroundImage: `url(${bg2})`,
            }}
            className="mb-5 text-6xl md:text-start text-center lg:text-start lg:text-7xl bg-clip-text text-transparent font-bold"
          >
            Looking For <br />
            Second-Hand Guitar?
          </h1>
          <p className="mb-5 text-white text-xl">
            Guiter Store is a reference among professionals and guitar
            enthusiasts. An increasingly large group of collectors,
            internationally renowned musicians and guitarists of all kinds,
            seeking the best quality at the best price, trust our online store.
            This has been achieved thanks to our unswerving commitment to our
            customers, our deep understanding of the products we are selling and
            the highly professional guidance and service we provide for our
            buyers.
          </p>
          <button
            style={{
              backgroundImage: `url(${buttonbg})`,
            }}
            className="btn bg-cover text-white font-bold text-lg"
          >
            Visite Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
