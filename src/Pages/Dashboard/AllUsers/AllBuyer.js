import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { GiCrossMark } from "react-icons/gi";
import ConfirmModal from "../../../Components/ConfirmModal/ConfirmModal";

const AllBuyer = () => {
  const [deleteUser, setDeletUser] = useState(null);

  const closeModal = () => {
    setDeletUser(null);
  };

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://product-resale-server-phi.vercel.app/users/buyer"
      );
      const data = await res.json();
      return data;
    },
  });

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
      <h1 className="text-5xl text-center font-bold mt-10">All Buyer</h1>
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
                  <label htmlFor="confirm-modal" className="btn">
                    <button
                      onClick={() => setDeletUser(user)}
                      className="btn btn-ghost text-lg text-red-500 font-bold btn-xs"
                    >
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

export default AllBuyer;
