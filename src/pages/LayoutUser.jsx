import React from "react";
import Header from "../component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Users/Home";
import Products from "./Users/Products";
import Login from "./Users/Login";

const LayoutUser = ({ users, SetLogged, logged, userDetails }) => {
  return (
    <div>
      <Header logged={logged} SetLogged={SetLogged} userDetails={userDetails} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route
          path="/Login"
          element={<Login users={users} SetLogged={SetLogged} />}
        />
      </Routes>
    </div>
  );
};
export default LayoutUser;
