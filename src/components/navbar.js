import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import ShoppingCartLogo from "../assets/logo/krzlogo.png";
import { CiHeart } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import { BsCart } from "react-icons/bs";
import Searchbar from "./searchBar";
import DropdownPage from "../components/dropDown";
import { userDataContext } from "../context/userDataContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ChangeUserLoginBgColor } from "../common functions/loginUserBgChange";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, userName, userLogout, userLogin, category,orders ,setOrders,userId,products} = useContext(userDataContext);
  const userLetter = userName?.slice(0, 1);
  const loginUserName = localStorage.getItem("username");
  const loginUserBgColor = ChangeUserLoginBgColor(loginUserName);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  useEffect(() => {
    const userCartItems = async () => {
      if (isAuthenticated) {
        try {
          const userID = userId;
          console.log("userId", userId);
          const response = await axios.get(`http://localhost:8000/api/user/${userID}/cart`);
          const mapData = response.data.data.cart;
          setOrders(mapData);
          console.log("products", products);
        } catch (error) {
          console.error(error);
        }
      }
    };
    userCartItems();
  }, [isAuthenticated, userId, setOrders]);

  return (
    <div className="navbar-main-div">
      <div className={`navbar-div ${visible ? "visible" : "hidden"}`}>
        <div className="navbar-logo">
          <img src={ShoppingCartLogo} className="ShoppingCartLogo" alt=""></img>
        </div>
        <div className="navbar-list-name">
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li>Shop</li>
            <li>
              <DropdownPage icon="Category" items={category} />
            </li>
            <li onClick={() => navigate("/contactus")}>Contact</li>
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
                <p className="nav-notification-icon-number">{orders.length}</p>
              </div>
              <BsCart className="ShoppingCartIcon" onClick={()=>navigate('/cartitems')} />
            </div>

            <div>
              {isAuthenticated ? (
                <DropdownPage icon={userLetter} style="nav-loginuserbg" items={userLogout} bgColor={loginUserBgColor} />
              ) : (
                <DropdownPage icon={<PiUserCircleLight />} style="ShoppingCartIcon" items={userLogin} bgColor="transparent" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
