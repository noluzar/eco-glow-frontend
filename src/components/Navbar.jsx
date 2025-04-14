import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../slices/cartSlice";
import { useProductStore } from "../store/product";
import { logout } from "../slices/authSlices";
import { useState, useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline, IoClose } from "react-icons/io5";

export const Navbar = () => {
  const { fetchProducts } = useProductStore();
  const { userInfo } = useSelector((state) => state.auth);
  const [cartOpen, setCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const increaseQuantityHandler = (id) => {
    dispatch(increaseQuantity(id));
  };

  const decreaseQuantityHandler = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [logoutApiCall] = useLogoutMutation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <nav className="fixed h-[10vh] top-0 left-0 w-full bg-[#f1e2c2] p-4 z-10 flex items-center justify-between">
        {/* Logo wrapper */}
        <div
          className={`text-xl font-bold hidden lg:block w-[8%] ${menuOpen ? "flex justify-center w-full" : ""}`}
        >
          <img src="/ec.png" alt="Logo" />
        </div>

        {/* Hamburger menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-[#afad55]"
        >
          ☰
        </button>

        {/* Menu items */}
        <div
          className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-[#f1e2c2] lg:bg-transparent p-4 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-10 lg:flex ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <a href="/" className="block lg:inline hover:text-[#afad55]">
            Home
          </a>
          <a href="#about" className="block lg:inline hover:text-[#afad55]">
            About
          </a>
          <a href="#shop" className="block lg:inline hover:text-[#afad55]">
            Shop
          </a>
          <a href="#contact" className="block lg:inline hover:text-[#afad55]">
            Contact
          </a>
        </div>

        {/* User or cart options */}
        {userInfo ? (
          <div className="relative flex items-center space-x-2">
            <CgProfile className="text-3xl text-[#afad55]" />
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-[#afad55] text-white px-4 py-2 rounded-md"
            >
              {`${userInfo?.firstName || ""} ${userInfo?.lastName || ""}`.trim()}
            </button>
            {dropdownOpen && (
              <div className="absolute p-2 top-11 right-0 w-44 bg-white border border-gray-200 rounded-md shadow-lg">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logoutHandler();
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
                {userInfo && !userInfo.isAdmin && (
                  <Link
                    to="/orderhistory"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Orders
                  </Link>
                )}
              </div>
            )}
            {userInfo && !userInfo.isAdmin && (
              <div className="relative">
                <button
                  className="bg-[#afad55] p-2 rounded-md text-white text-2xl"
                  onClick={toggleCart}
                >
                  <IoCartOutline />
                  {totalItems > 0 && (
                    <span className="absolute top-[-15px] right-[-15px] bg-[#afad55] text-white rounded-full text-xs px-2 py-1">
                      {totalItems}
                    </span>
                  )}
                </button>
                {cartOpen && (
                  <div
                    ref={cartRef}
                    className="absolute right-0 top-[70px] w-[450px] h-[80vh] bg-[#f1e2c2] shadow-lg p-4"
                  >
                    <div className="flex justify-between text-lg">
                      <h2 className="font-bold text-lg mb-4">Your Cart</h2>
                      <IoClose
                        className="cursor-pointer"
                        onClick={() => setCartOpen(false)}
                      />
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <p>{totalItems} items</p>
                      <button onClick={clearCartHandler}>Clear all</button>
                    </div>
                    {cartItems.length === 0 ? (
                      <p>No items in the cart yet.</p>
                    ) : (
                      <ul>
                        {cartItems.map((item) => (
                          <li key={item._id} className="pt-4">
                            <div className="flex justify-between items-center w-full">
                              <Link
                                to={`/details/${item._id}`}
                                className="flex items-center space-x-4"
                              >
                                <img
                                  src={item.image}
                                  className="rounded-md w-16 h-16"
                                  alt={item.name}
                                />
                              </Link>
                              <div>
                                <p>{item.name}</p>
                                <p>R{item.price}.00</p>
                              </div>
                              <div className="flex items-center">
                                <button
                                  onClick={() =>
                                    decreaseQuantityHandler(item._id)
                                  }
                                  className="px-2 bg-[#afad55] text-white"
                                >
                                  -
                                </button>
                                <p className="px-2">{item.quantity}</p>
                                <button
                                  onClick={() =>
                                    increaseQuantityHandler(item._id)
                                  }
                                  className="px-2 bg-[#afad55] text-white"
                                >
                                  +
                                </button>
                              </div>
                              <button
                                onClick={() => removeFromCartHandler(item._id)}
                              >
                                Remove
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                    {cartItems.length > 0 && (
                      <>
                        <hr className="my-4" />
                        <div>
                          <div className="flex justify-between items-center text-lg font-bold">
                            <p>Total Price:</p>
                            <p>R{totalPrice.toFixed(2)}</p>
                          </div>
                          <Link to="/checkout" className="py-4">
                            <button className="p-2 bg-[#afad55] text-white rounded-md text-lg w-full">
                              Checkout
                            </button>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="space-x-4 flex items-center">
            <Link to="/login">
              <button className="border-none bg-[#afad55] text-white px-4 py-2 w-[6vw]">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="border border-black px-4 py-2 w-[6vw]">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};
