import React from "react";

const AllUsers = () => {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold mt-10">All Users</h1>
      <div className="overflow-x-auto lg:w-[80%] w-[95%] mx-auto bg-white p-5 rounded-2xl shadow-2xl mt-10">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
