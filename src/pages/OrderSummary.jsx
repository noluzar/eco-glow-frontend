import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { orderItems, totalPrice } = state || {};

  return (
    <div className="pt-[100px] p-4 space-y-6 h-screen">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-[#afad55]">
          Order Confirmed!
        </h2>
        <p className="text-lg">
          Thank you for your purchase. Here's your order summary:
        </p>
      </div>
      <div className="bg-[#f1e2c2] p-6 shadow-lg space-y-4">
        <h3 className="text-2xl font-semibold mb-4">Order Details</h3>
        <ul className="space-y-3">
          {orderItems?.map((item, index) => (
            <li key={index} className="flex justify-between border-b pb-2">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm">Quantity: {item.quantity}</p>
              </div>
              <p>R{item.price * item.quantity}.00</p>
            </li>
          ))}
        </ul>
        <div className="flex justify-between text-xl font-semibold">
          <p>Total Price:</p>
          <p>R{totalPrice}.00</p>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => navigate("/userproducts")}
          className="p-2 bg-[#afad55] text-white w-[200px] text-lg"
        >
          Continue Shopping
        </button>
        <button
          onClick={() => navigate("/")}
          className="p-2 border border-black w-[200px] text-lg"
        >
          Go to Home
        </button>
        <button
          onClick={() => navigate("/orderhistory")}
          className="p-2 bg-[#afad55] text-white w-[200px] text-lg"
        >
          View Order History
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
