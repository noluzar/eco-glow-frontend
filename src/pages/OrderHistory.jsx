import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/api/orders/order-history`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        });
        setOrders(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch orders. Please try again.");
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="pt-[100px] p-4 space-y-6">
      <div className="text-center space-y-2 p-2">
        <h2 className="text-3xl font-bold text-[#afad55]">
          Your Order History
        </h2>
        <p className="text-lg">Here are your previous orders.</p>
      </div>
      <div>
        {orders.length === 0 ? (
          <p>You don&apos;t have any past orders.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-[#f1e2c2] p-6 shadow-lg space-y-4 mb-6"
            >
              <div className="flex justify-between items-center font-semibold">
                <h3 className="text-2xl font-semibold mb-4">
                  Order #{order._id}
                </h3>
                <h3>{new Date(order.createdAt).toLocaleDateString()}</h3>
              </div>
              <ul className="space-y-3">
                {order.orderItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between border-b pb-2"
                  >
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
                <p>R{order.totalPrice}.00</p>
              </div>
              <button
                onClick={() =>
                  navigate(`/order-summary`, {
                    state: {
                      orderItems: order.orderItems,
                      totalPrice: order.totalPrice,
                    },
                  })
                }
                className="mt-4 p-2 bg-[#afad55] text-white w-full sm:w-[200px] text-lg"
              >
                View Order
              </button>
            </div>
          ))
        )}
        <button
          onClick={handleCancel}
          className="p-2 border border-black w-[200px] text-lg"
        >
          Back
        </button>
      </div>
      
    </div>
  );
};

export default OrderHistory;
