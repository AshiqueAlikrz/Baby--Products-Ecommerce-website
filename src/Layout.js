// Layout.js
import React from "react";
import Navbar from "./components/navbar";
import { Switch, Route, Routes } from "react-router-dom";

// import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
    {children}
    </div>
  );
};

export default Layout;
