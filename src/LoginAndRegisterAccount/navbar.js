import React from "react";
import { useState } from "react";
import "./logout.css";
import "./cart.css";
import "./signIn.css";
import "./usericonnavbar.css";
import {
  MDBListGroupItem,
  MDBNavbar,
  MDBInputGroup,
  MDBInput,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBCollapse,
  MDBBadge,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBListGroup,
} from "mdb-react-ui-kit";
import "./Style.css";
import { Link } from "react-router-dom";
import Babyimage from "./attachment_87322237-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userDataContext } from "../userDataContext";
import { useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);
  const {
    isAuthenticated,
    setIsAuthenticated,
    search,
    orders,
    products,
    users,
    LoginUser,
    setOrders,
    setSearch,
    token,
    userId,
    userName,
  } = useContext(userDataContext);
  const navigate = useNavigate();

  const toKidsCloth = (e) => {
    e.preventDefault();
    navigate("/kidsclothing");
  };

  const toBabyCare = (e) => {
    e.preventDefault();
    navigate("/babycare");
  };

  const toFootWear = (e) => {
    e.preventDefault();
    navigate("/footwear");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.clear();
    navigate("/");
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    navigate("/cartItems");
  };

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
    <div>
      <MDBNavbar expand="lg" className="py-5 main-navbar" light>
        <MDBContainer fluid className="container-text">
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars py-1 " />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right className="  mb-lg-0 ">
              <img src={Babyimage} className="baby-icon" alt="img-no"></img>

              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="" className="nav-text ">
                  <Link to="/" className="text-black">
                    Home
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="" className="nav-text ">
                  <Link to="/" className="text-black">
                    Shop
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBDropdown className="Dropdown">
                <MDBDropdownToggle color="light" className="Dropdown-text" style={{ textTransform: "capitalize" }}>
                  Category
                </MDBDropdownToggle>
                <MDBDropdownMenu light>
                  <MDBDropdownItem link onClick={toKidsCloth}>
                    Kids Clothing
                  </MDBDropdownItem>
                  <MDBDropdownItem link onClick={toBabyCare}>
                    Baby Care
                  </MDBDropdownItem>
                  <MDBDropdownItem link onClick={toFootWear}>
                    Footwear & accessories
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBNavbarItem>
                <MDBNavbarLink href="" className="nav-text">
                  <Link to="/aboutus" className="text-black">
                    {" "}
                    About{" "}
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="" className="nav-text">
                  <Link to="/ContactUs" className="text-black ">
                    Contact
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <div className="fafa-div">
              <MDBInputGroup className="search-bar">
                <MDBInput label="Search" onChange={(e) => setSearch(e.target.value)}>
                  {search !== "" && (
                    <MDBListGroup
                      className="search-results"
                      style={{
                        zIndex: "5",
                        position: "absolute",
                        borderRadius: "5px",
                        padding: "2px",
                        border: "1px solid grey",
                        backgroundColor: "white",
                        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.5)",
                        width: "340px",
                        maxHeight: "200px",
                        overflowY: "auto",
                        overflowX: "auto",
                        marginTop: "10px",
                      }}
                      light
                    >
                      {products
                        .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
                        .map((item, index) => (
                          <MDBListGroupItem
                            key={index}
                            onClick={() => {
                              navigate(`/productdetails/${item._id}`);
                              setSearch(" ");
                            }}
                          >
                            {item.title}
                          </MDBListGroupItem>
                        ))}
                    </MDBListGroup>
                  )}
                </MDBInput>
                <MDBBtn rippleColor="dark">
                  <MDBIcon icon="search" />
                </MDBBtn>
              </MDBInputGroup>

              {isAuthenticated ? (
                <button id="btn-message" class="button-message">
                  <div class="content-avatar">
                    <div class="status-user"></div>
                    <div class="avatar">
                      <svg class="user-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="notice-content">
                    <div class="lable-message">{userName}</div>
                    <div class="user-id">You are Logged In</div>
                  </div>
                </button>
              ) : (
                <a className="mx-3 icon" href=" ">
                  <Link to="/loginpage">
                    <button className="submitBtn">
                      Sign In
                      <svg fill="white" viewBox="0 0 448 512" height="1em" className="arrow">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                      </svg>
                    </button>
                  </Link>
                </a>
              )}
             

              {isAuthenticated && (
                <button data-quantity="0" className="btn-cart custom-btn" onClick={handleCartClick}>
                  <svg
                    className="icon-cart"
                    viewBox="0 0 24.38 30.52"
                    height="30.52"
                    width="24.38"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-cart</title>
                    <path
                      transform="translate(-3.62 -0.85)"
                      d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                    ></path>
                  </svg>

                  {orders.length > 0 && (
                    <span
                      className="cart-notification"
                      style={{
                        backgroundColor: "#dc3545",
                        color: "#fff",
                        borderRadius: "50%",
                        fontSize: "9px",
                        padding: "1.5px",
                        position: "absolute",
                        bottom: "25px",
                        right: "6px",
                        height: "35%",
                        width: "35%",
                      }}
                    >
                      {orders.length}
                    </span>
                  )}
                </button>
              )}

              {isAuthenticated && (
                // <MDBBtn className="me-1  logout-button" color="danger" onClick={logout}>
                //   Log out
                // </MDBBtn>
                <button className="Btn" onClick={logout}>
                  <div className="sign">
                    <svg viewBox="0 0 512 512">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                  </div>
                  <div className="text">Logout</div>
                </button>
              )}
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Navbar;
