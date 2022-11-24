import React from "react";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <RingLoader
        className=""
        color="#36d7b7"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
