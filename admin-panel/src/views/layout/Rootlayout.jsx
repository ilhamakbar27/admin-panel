import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";

// import React from 'react'

const Rootlayout = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Rootlayout;
