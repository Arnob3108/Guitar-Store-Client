import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../../Context/AuthContext/AuthProvider";

const ProductModal = ({ bookingProduct, setBookingProduct }) => {
  const { user, setLoading } = useContext(AuthContext);

  const bookingTime = new Date();
  const bookingDate = format(bookingTime, "PP");

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
    date,
  } = bookingProduct;
  console.log(bookingProduct);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const meetingLoaction = form.meeting.value;
    const userPhone = form.userPhone.value;
    const email = user?.email;

    const productBooked = {
      name,
      original,
      resale,
      bookingDate,
      email,
      meetingLoaction,
      userPhone,
      img,
      seller,
    };

    fetch("http://localhost:5000/category/product/booked", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productBooked),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        if (data.acknowledged) {
          toast.success("Product Booked Successfully");
          form.reset();
          //   navigate(`/category/${categori_id}`);
          setLoading(false);
          setBookingProduct(null);
        }
      });

    console.log(productBooked);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid gap-5 mt-10">
            <div className="form-control">
              <input
                type="text"
                value={bookingDate}
                disabled
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
            <div className="form-control">
              <input
                name="name"
                disabled
                defaultValue={user?.displayName}
                type="text"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
            <div className="form-control">
              <input
                name="email"
                defaultValue={user?.email}
                type="text"
                disabled
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>

            <div className="flex justify-between flex-col lg:flex-row">
              <div className="flex-1 form-control">
                <input
                  name="original"
                  type="text"
                  disabled
                  value={original}
                  className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
                />
              </div>
              <div className="flex-1 form-control">
                <input
                  name="resale"
                  type="text"
                  disabled
                  value={resale}
                  className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
                />
              </div>
            </div>
            <div className="form-control">
              <input
                type="text"
                required
                name="userPhone"
                placeholder="Your Phone"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>
            <div className="form-control">
              <input
                required
                type="text"
                name="meeting"
                placeholder="Your Location"
                className="input shadow-inner shadow-gray-400/50 input-bordered input-info w-[96%]"
              />
            </div>

            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
