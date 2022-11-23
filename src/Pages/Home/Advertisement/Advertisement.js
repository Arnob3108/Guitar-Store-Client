import React from "react";
import advertise from "../../../Assets/advertise.png";
import bg from "../../../Assets/orangebg.jpg";

const Advertisement = () => {
  return (
    <section>
      <div
        className="bg-cover h-[40em]"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero w-full text-white">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={advertise}
              className="-mt-44 mr-28 h-[50em] drop-shadow-2xl -mb-4 hidden lg:block rounded-lg"
              alt=""
            />
            <div className="lg:w-1/2 lg:pl-24">
              <div className="card w-96 glass">
                <figure>
                  <img src="https://placeimg.com/400/225/arch" alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
