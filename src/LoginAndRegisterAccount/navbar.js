import React from "react";
import { useState } from "react";
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
    userId
    
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
          console.log("products",products);
        } catch (error) {
          console.error(error);
        }
      }
    };
    userCartItems();
  }, [isAuthenticated,userId,setOrders]);


  return (
    <div>
      <MDBNavbar expand="lg" className="py-5 " light>
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
              <MDBInputGroup className="search-bar ">
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
                        .map((item,index) => (
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

              <a className="mx-3 icon" href=" ">
                <Link to="/loginpage">
                  <MDBIcon fas icon="user" className="fafa-icon" />
                </Link>
              </a>

              {isAuthenticated && (
                <a className="mx-2 shopping-cart" href=" ">
                  <div onClick={handleCartClick}>
                    {orders.length > 0 && (
                      <MDBBadge color="danger" className="cart-notification" notification pill>
                        {orders.length}
                      </MDBBadge>
                    )}
                    <MDBIcon fas icon="shopping-cart mt-4" className="fafa-icon" />
                  </div>
                        
                </a>
              )}
              {isAuthenticated && (
                <MDBBtn className="me-1  logout-button" color="danger" onClick={logout}>
                  Log out
                </MDBBtn>
              )}
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Navbar;
