import React from "react";
import Header from "../component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Users/Home";
import Products from "./Users/Products";
import Login from "./Users/Login";
import DashBoard from "./Admin/DashBoard";
import AdminHeader from "../component/AdminHeader";

const LayoutAdmin = () => {
  return (
    <div>
      <AdminHeader />
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </div>
  );
};

export default LayoutAdmin;
