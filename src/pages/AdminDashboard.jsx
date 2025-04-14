import {
  MdOutlineDashboard,
  MdOutlineShoppingBag,
  MdOutlinePeopleAlt,
  MdOutlineSettings,
  MdOutlineHelpOutline,
} from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-[100vh] pt-[25%] my-1">
      <div
        className={`space-y-2 w-[60%] sm:w-[40%] md:w-[30%] lg:w-[20%] fixed bg-[#f1e2c2] h-full z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="h-[45vh] p-4 space-y-4">
          <p>MENU</p>
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 ${
                isActive ? "bg-[#afad55] text-white" : "text-[#afad55]"
              } hover:bg-[#afad55] hover:text-white`
            }
          >
            <MdOutlineDashboard className="size-6" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 ${
                isActive ? "bg-[#afad55] text-white" : "text-[#afad55]"
              } hover:bg-[#afad55] hover:text-white`
            }
          >
            <MdOutlineShoppingBag className="size-6" />
            <p>Products</p>
          </NavLink>
          <NavLink
            to="customers"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 ${
                isActive ? "bg-[#afad55] text-white" : "text-[#afad55]"
              } hover:bg-[#afad55] hover:text-white`
            }
          >
            <MdOutlinePeopleAlt className="size-6" />
            <p>Customers</p>
          </NavLink>
          <NavLink
            to="orders"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 ${
                isActive ? "bg-[#afad55] text-white" : "text-[#afad55]"
              } hover:bg-[#afad55] hover:text-white`
            }
          >
            <TbTruckDelivery className="size-6" />
            <p>Orders</p>
          </NavLink>
        </div>
        <div className="h-[45vh] p-4 space-y-4">
          <p>SUPPORT</p>
          <a href="#" className="flex items-center space-x-2 p-2">
            <MdOutlineHelpOutline className="size-6 text-[#afad55]" />
            <p>Help</p>
          </a>
          <a href="#" className="flex items-center space-x-2 p-2">
            <MdOutlineSettings className="size-6 text-[#afad55]" />
            <p>Settings</p>
          </a>
        </div>
      </div>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute top-4 left-4 lg:hidden bg-[#afad55] text-white p-2 rounded-lg shadow-md"
      >
        <IoMenu className="size-6" />
      </button>
    </div>
  );
};

export default AdminDashboard;
