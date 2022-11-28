import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";
import { RiSecurePaymentFill } from "react-icons/ri";

const Orders = () => {
  const { user } = useContext(AuthContext);
  //   const url = `https://product-resale-server-phi.vercel.app/bookedProducts?email=${user?.email}`;

  const { data: productBooked = [] } = useQuery({
    queryKey: ["bookedProducts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://product-resale-server-phi.vercel.app/bookedProducts?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-5xl text-center font-bold mt-10">My Orders</h1>
      <div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="overflow-x-auto lg:w-[80%] w-[95%] mx-auto bg-white p-5 rounded-2xl shadow-2xl mt-10"
        >
          {productBooked.length > 0 ? (
            <table className="table table-zebra w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row --> */}
                {productBooked.map((booked, i) => (
                  <tr key={i}>
                    <th>
                      <p>{i + 1}</p>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={booked.img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{booked.name}</div>
                          <div className="text-sm opacity-50">
                            {booked.bookingDate}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {booked.resale}
                      <br />
                      <span className="badge badge-ghost line-through badge-sm">
                        {booked.original}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-ghost text-3xl font-bold">
                        <RiSecurePaymentFill></RiSecurePaymentFill>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* <!-- foot --> */}
            </table>
          ) : (
            <h1 className="text-5xl text-center font-bold">
              {" "}
              No Booking Found!!! Go to{" "}
              <Link
                className="text-indigo-700 underline"
                to={"/category/product"}
              >
                Product
              </Link>{" "}
              & Book{" "}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
