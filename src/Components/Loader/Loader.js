import React from "react";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className=" my-[10%]">
      <RingLoader
        className="w-full mx-auto"
        color="#36d7b7"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
