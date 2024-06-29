import React, { useContext } from "react";
import "../../styles/WishList.css";
import { CiUser } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { userDataContext } from "../../context/userDataContext";
import { ChangeUserLoginBgColor } from "../../common functions/loginUserBgChange";

const WishList = () => {
  const { isAuthenticated, setIsAuthenticated, loginUserName, userName, userLogout, userLogin, category, orders, setOrders, userId, products } = useContext(userDataContext);
  const userLetter = userName?.slice(0, 1);
  // const loginUserName = localStorage.getItem("username");
  const list = [];
  console.log("userName", userName);

  return (
    <div className="wishlist-container">
      <div className="wishlist-sidebar">
        <div className="wishlist-userdata">
          <div>
            <FaRegCircleUser className="wishlist-user-icon" />
          </div>
          <div className="wishlist-userlogin-name">
            <h6>Hello ,</h6>
            <h1 className="wishlist-sidebar-usernametext">{loginUserName}</h1>
          </div>
        </div>
        <hr />
        <div>
          <h4 className="wishlist-sidebar-text">Orders</h4>
          <h4 className="wishlist-sidebar-text">Wishlist</h4>
        </div>
      </div>
      <div className="wishlist-mainview">
        <h1 className="wishlist-mainview-text">My Wishlist (0)</h1>
        <div className="wishlist-mainview-items">
          <div className="wishlist-items"><h1>data</h1></div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
