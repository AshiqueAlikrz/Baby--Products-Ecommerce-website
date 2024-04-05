import React from "react";
import "../styles/navbar.css";
import ShoppingCartLogo from "../assets/logo/krzlogo.png";
import { CiHeart } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import { BsCart } from "react-icons/bs";
import Searchbar from "./searchBar";
import DropdownPage from "../components/dropDown";

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
              <div className="notification-round">
                <p className="nav-notification-icon-number">1</p>
              </div>
              <CiHeart className="ShoppingCartIcon" />
            </div>

            <div>
              <div className="notification-round">
                <p className="nav-notification-icon-number">13</p>
              </div>
              <BsCart className="ShoppingCartIcon" />
            </div>

            <div>
              <DropdownPage icon={<PiUserCircleLight />} style="ShoppingCartIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
