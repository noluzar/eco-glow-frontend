// import React from 'react'
import { Outlet } from "react-router-dom";
import AdminDashboard from '../pages/AdminDashboard';


const AdminLayout = () => {
  return (
      <div className="grid grid-cols-10">
      <div className="col-span-2"><AdminDashboard /></div>
      <div className="col-span-8 pt-[7%]">
        <Outlet />
      </div>
    </div>
  )
};

export default AdminLayout
