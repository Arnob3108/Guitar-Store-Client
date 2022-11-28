import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";
import { GiCrossMark } from "react-icons/gi";
import { FcAdvertising } from "react-icons/fc";
import ConfirmModal from "../../../Components/ConfirmModal/ConfirmModal";
import toast from "react-hot-toast";

const MyProducts = () => {
  const [deleteProduct, setDeletProduct] = useState(null);

  const closeModal = () => {
    setDeletProduct(null);
  };
  const { user } = useContext(AuthContext);

  const {
    data: myProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://product-resale-server-phi.vercel.app/myProducts?email=${user?.email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDelete = (product) => {
    fetch(
      `https://product-resale-server-phi.vercel.app/product/${product._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`${product.name} Delete successfully`);
          refetch();
        }
      });
  };

  return (
    <div>
      <h1 className="text-5xl text-center font-bold mt-10">My Products</h1>
      <div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="overflow-x-auto lg:w-[85%] w-[95%] mx-auto bg-white p-5 rounded-2xl shadow-2xl mt-10"
        >
          {myProducts?.length > 0 ? (
            <table className="table table-zebra w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Avertise</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row --> */}
                {myProducts.map((product, i) => (
                  <tr key={i}>
                    <th>
                      <p>{i + 1}</p>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={product.img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{product.name}</div>
                          <div className="text-sm opacity-50">
                            {product.date}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {product.resale}
                      <br />
                      <span className="badge badge-ghost line-through badge-sm">
                        {product.original}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-info text-sm font-bold btn-xs">
                        Available
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-info text-3xl font-bold">
                        <FcAdvertising></FcAdvertising>
                      </button>
                    </td>
                    <td>
                      <label
                        onClick={() => setDeletProduct(product)}
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
              {/* <!-- foot --> */}
            </table>
          ) : (
            <h1 className="text-5xl text-center font-bold">
              {" "}
              No Product Found!!! Go to{" "}
              <Link
                className="text-indigo-700 underline"
                to={"/dashboard/addProduct"}
              >
                Add Product
              </Link>{" "}
              & Add Your Product{" "}
            </h1>
          )}
        </div>
      </div>
      {deleteProduct && (
        <ConfirmModal
          title={"Are You Sure?"}
          message={`You Want to Delete ${deleteProduct.name}?`}
          successButtonName="Delete"
          successAction={handleDelete}
          modalData={deleteProduct}
          closeModal={closeModal}
        ></ConfirmModal>
      )}
    </div>
  );
};

export default MyProducts;
