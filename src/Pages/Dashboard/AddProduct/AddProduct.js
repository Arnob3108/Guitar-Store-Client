import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";

const AddProduct = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const time = new Date();

  const date = format(time, "PP");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const original = form.original.value;
    const resale = form.resale.value;
    const location = form.location.value;
    const phone = form.phone.value;
    const use = form.use.value;
    const GuitarType = form.GuitarType.value;
    const condition = form.condition.value;
    const categori_id = form.categori_id.value;
    const Top = form.Top.value;
    const BackAndSides = form.BackAndSides.value;
    const Neck = form.Neck.value;
    const Fretboard = form.Fretboard.value;
    const seller = user?.displayName;
    const email = user?.email;

    const categoryProduct = {
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
    };

    fetch("http://localhost:5000/category/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(categoryProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        if (data.acknowledged) {
          toast.success("Product Added successfully");
          form.reset();
          navigate(`/category/${categori_id}`);
          setLoading(false);
        }
      });

    console.log(categoryProduct);
  };
  return (
    <div>
      <h1 className=" text-5xl text-center font-bold mt-10 ">
        Add Your Product
      </h1>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="500"
        className="w-[80%] mx-auto lg:bg-white bg-white/50 shadow-2xl p-10 rounded-2xl mt-8"
      >
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Product Name"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text">Product Photo URL</span>
              </label>
              <input
                type="text"
                name="img"
                required
                placeholder="Photo Url"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
          </div>
          <div className="flex justify-between my-5 flex-col lg:flex-row">
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text">Original Price</span>
              </label>
              <input
                type="text"
                name="original"
                required
                placeholder="Type here"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text">Resale Price</span>
              </label>
              <input
                type="text"
                name="resale"
                required
                placeholder="Type here"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                required
                placeholder="Type here"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
          </div>
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text">Contact Number</span>
              </label>
              <input
                type="text"
                name="phone"
                required
                placeholder="Type here"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text">Year of Used</span>
              </label>
              <input
                type="text"
                name="use"
                required
                placeholder="Type here"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text">Guitar Type</span>
              </label>
              <input
                type="text"
                name="GuitarType"
                required
                placeholder="Type here"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
          </div>
          <div className="flex justify-between my-5 flex-col lg:flex-row">
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text">Condition</span>
              </label>
              <select
                required
                name="condition"
                className="select shadow-inner shadow-gray-400/50 select-info w-[96%]"
              >
                <option value={"Brand New"} selected>
                  Brand New
                </option>
                <option value={"Excilent"}>Excilent</option>
                <option value={"Good"}>Good</option>
                <option value={"Poor"}>Fair</option>
              </select>
            </div>
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                required
                name="categori_id"
                className="select shadow-inner shadow-gray-400/50 select-info w-[96%]"
              >
                <option value={"Acoustic"} selected>
                  Acoustic
                </option>
                <option value={"Electric"}>Electric</option>
                <option value={"Bass"}>Bass</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text">Top Condition</span>
              </label>
              <input
                type="text"
                name="Top"
                required
                placeholder="Top"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text">Back And Side</span>
              </label>
              <input
                type="text"
                name="BackAndSides"
                required
                placeholder="Back And Side"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text">Neck</span>
              </label>
              <input
                type="text"
                name="Neck"
                required
                placeholder="Neck"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text">Fretboard</span>
              </label>
              <input
                type="text"
                name="Fretboard"
                required
                placeholder="Fretboard"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
          </div>
          <button className="btn btn-info w-[80%] ml-[10%] mt-5 text-white hover:text-black">
            Add Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
