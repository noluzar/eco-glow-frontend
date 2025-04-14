// import React from "react";
import { CiLock } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { usePlaceOrderMutation } from "../slices/orderSlice";
import { clearCart } from "../slices/cartSlice";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const [placeOrder] = usePlaceOrderMutation();

  const handlePlaceOrder = async () => {
    try {
      const order = await placeOrder({ orderItems: cartItems, totalPrice }).unwrap();
      dispatch(clearCart());
      navigate("/ordersummary", { state: { orderItems: cartItems, totalPrice } });
    } catch (error) {
      console.error("Order failed", error);
    }
  };
  

  const handleCancel = () => {
    navigate(-1);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="pt-[100px] p-4 space-y-2 text-lg">
      <div className="flex justify-between">
        <div></div>
        <div className="flex flex-col w-[50%] bg-[#f1e2c2] p-4 space-y-4">
          <p>Card Information</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <p>First Name *</p>
              <input
                placeholder="First Name *"
                className="p-3 rounded-md w-full outline-none"
              />
              <p>Last Name *</p>
              <input
                placeholder="Last Name *"
                className="p-3 rounded-md w-full outline-none"
              />
            </div>
            <div>
              <p>Card Number *</p>
              <input
                placeholder="Card Number *"
                className="p-3 rounded-md w-full outline-none"
              />
            </div>
            <div>
              <p>Expiry Date *</p>
              <div className="flex space-x-2">
                <select className="p-3 rounded-md w-full outline-none focus:ring-2 focus:ring-[#afad55] focus:border-[#afad55]">
                  <option value="" className="bg-[#f6e9db] hover:bg-[#afad55]">
                    Month
                  </option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option
                      key={i + 1}
                      value={i + 1}
                      className="bg-[#f1e2c2] hover:bg-[#afad55]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </option>
                  ))}
                </select>
                <select className="p-3 rounded-md w-full outline-none appearance-none focus:ring-2 focus:ring-[#afad55] focus:border-[#afad55]">
                  <option value="" className="bg-[#f6e9db]">
                    Year
                  </option>
                  {Array.from({ length: 15 }, (_, i) => {
                    const year = new Date().getFullYear() + i;
                    return (
                      <option
                        key={year}
                        value={year}
                        className="bg-[#f1e2c2] hover:bg-[#afad55]"
                      >
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div>
              <p>Security code *</p>
              <input
                placeholder="CVV"
                className="p-3 rounded-md w-full outline-none"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex justify-between">
        <div></div>
        <div className="flex flex-col bg-[#f1e2c2] p-4 w-[50%] space-y-2">
          <div className="flex justify-between items-center">
            <p>Subtotal:</p>
            <p>R{totalPrice}.00</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Shipping Fee:</p>
            <p>Free Shipping</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex justify-between">
        <div></div>
        <div className="w-[50%] bg-[#f1e2c2] p-4">
          <div className="flex items-center space-x-2 text-lg text-[#afad55]">
            <CiLock />
            <p>Privacy & Policy</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            minima tempore qui aperiam iure at sed voluptatum atque dolores nam
            assumenda,delectus aliquid minus facilis consequuntur harum
            molestiae exercitationem aliquam!
          </p>
        </div>
        <div></div>
      </div>
      <div className="flex justify-between">
        <div></div>
        <div className="flex space-x-2 w-[50%]">
          <button className="p-2 bg-[#afad55] text-white text-lg w-full" onClick={handlePlaceOrder}>
            PLACE ORDER
          </button>
          <button
            onClick={handleCancel}
            className="p-2 border border-black text-lg w-full"
          >
            CANCEL
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Checkout;
