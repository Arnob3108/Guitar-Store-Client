import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { GiCrossMark } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import ConfirmModal from "../../../Components/ConfirmModal/ConfirmModal";

const AllSeller = () => {
  const [deleteUser, setDeletUser] = useState(null);

  const closeModal = () => {
    setDeletUser(null);
  };

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://product-resale-server-phi.vercel.app/users/seller"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleVerify = (email) => {
    fetch(
      `https://product-resale-server-phi.vercel.app/users/verify/${email}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Verified Succesfully");
          refetch();
        }
      });
  };

  const handleDelete = (user) => {
    fetch(`https://product-resale-server-phi.vercel.app/users/${user._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`${user.name} Delete successfully`);
          refetch();
        }
      });
  };

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
                  <button
                    onClick={() => handleVerify(user?.email)}
                    className="btn btn-ghost text-blue-500 text-3xl font-bold"
                  >
                    {user?.verified === true ? <MdVerified /> : "Verify Seller"}
                  </button>
                </td>
                <td>
                  <label
                    onClick={() => setDeletUser(user)}
                    htmlFor="confirm-modal"
                    className="btn"
                  >
                    <button className="btn btn-ghost text-lg text-red-500 font-bold btn-xs">
                      <GiCrossMark></GiCrossMark>
                    </button>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteUser && (
        <ConfirmModal
          title={"Are You Sure?"}
          message={`You Want to Delete ${deleteUser.name}?`}
          successButtonName="Delete"
          successAction={handleDelete}
          modalData={deleteUser}
          closeModal={closeModal}
        ></ConfirmModal>
      )}
    </div>
  );
};

export default AllSeller;
