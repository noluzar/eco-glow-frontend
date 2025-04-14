import React from "react";
import { useGetAllOrdersQuery } from "../slices/orderSlice";
import { CiSearch } from "react-icons/ci";

const Orders = () => {
  const { data: orders, isLoading, error } = useGetAllOrdersQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.data?.message}</p>;

  return (
    <div className="sm:px-4">
      <div className="bg-[#f1e2c2] p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-lg sm:text-xl font-semibold p-2">All Orders</h1>
          <div className="flex items-center gap-2 bg-[#fdf4df] p-2 rounded-md border border-[#f1e2c2] w-full sm:w-[50%] lg:w-[40%]">
            <CiSearch className="size-5 sm:size-6" />
            <input
              placeholder="Search"
              className="bg-transparent outline-none w-full text-sm sm:text-base"
            />
          </div>
        </div>

        <div className="overflow-x-auto bg-[#fdf4df] mt-4 rounded-lg">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="text-left text-sm sm:text-base">
                <th className="p-3">Order ID</th>
                <th className="p-3">First Name</th>
                <th className="p-3">Last Name</th>
                <th className="p-3">Total Price</th>
                <th className="p-3">Date Placed</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order._id}
                  className="hover:bg-gray-100 text-sm sm:text-base"
                >
                  <td className="p-3 break-all">#{order._id}</td>
                  <td className="p-3">{order.user?.firstName}</td>
                  <td className="p-3">{order.user?.lastName}</td>
                  <td className="p-3">R{order.totalPrice}.00</td>
                  <td className="p-3">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
