import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "../../Assets/error.png";

const ErrorPage = () => {
  return (
    <div className=" text-center min-h-screen">
      <img className="mx-auto pt-52" src={ErrorImg} alt="" />
      <Link to="/">
        <button className="btn btn-outline btn-error mb-14">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
