import React from "react";
import "../styles/navbar.css";
import NumberNotification from "../assets/icons/pngtree-circle-clipart-red-circle-png-image_2381952-removebg-preview.png";
import ShoppingCartLogo from "../assets/logo/krzlogo.png";
import { CiHeart } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import { BsCart } from "react-icons/bs";
import Searchbar from "./searchBar";

const navbar = () => {
  return (
    <div className="navbar-main-div">
      <div className="navbar-div">
        <div className="navbar-logo">
          <img src={ShoppingCartLogo} className="ShoppingCartLogo" alt=""></img>
        </div>
        <div className="navbar-list-name">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Category</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="navbar-icons-div">
          <div className="navbar-search">
            <Searchbar />
          </div>

          <div className="nav-icons-subdiv">
            <div>
              <img src={NumberNotification} className="nav-notification-icon" alt="reload" />
              <CiHeart className="ShoppingCartIcon" />
            </div>
            <div>
              <img src={NumberNotification} className="nav-notification-icon" alt="reload" />
              <BsCart className="ShoppingCartIcon" />
            </div>
            <div>
              <PiUserCircleLight className="ShoppingCartIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
