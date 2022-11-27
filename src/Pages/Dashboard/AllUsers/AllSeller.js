import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GiCrossMark } from "react-icons/gi";

const AllSeller = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users/seller");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-5xl text-center font-bold mt-10">All Seller</h1>
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="overflow-x-auto lg:w-[80%] w-[95%] mx-auto bg-white p-5 rounded-2xl shadow-2xl mt-10"
      >
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verification</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {users.map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-info text-sm font-bold btn-xs">
                    Verify
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost text-lg text-red-500 font-bold btn-xs">
                    <GiCrossMark></GiCrossMark>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
