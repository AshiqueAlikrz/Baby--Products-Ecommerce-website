import React, { useContext, useEffect, useState } from "react";
import "./viewproducts.css";
import { MDBIcon } from "mdb-react-ui-kit";
import Navbar from "./navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Style.css";
import Footer from "./Footer";
import { userDataContext } from "../userDataContext";
import { useNavigate } from "react-router-dom";

const ViewProduct = () => {
  const { isAuthenticated, LoginUser, setOrders } = useContext(userDataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // const [cart, setCart] = useState(true);
  const [isItemInCart, setIsItemInCart] = useState(false);
  const [Product, setProduct] = useState({});
  const [cartStatus, setCartStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/user/products/${id}`);
        const viewProduct = response.data.data;
        setProduct(viewProduct);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  
  const addToCart = async (newItems, e) => {
    e.preventDefault();
    try {
      const userPayload = LoginUser.id;
      const productPayload = { id: newItems };
      const alreadyCartResponse = await axios.post(
        `http://localhost:8000/api/user/${userPayload}/cart`,
        productPayload
      );
      if (alreadyCartResponse.data.message === "already in cart") {
        setCartStatus(alreadyCartResponse.data.message);
        e.preventDefault();
        setCartStatus(true);
        setIsItemInCart(true);
        alert("Item already in cart");
      } else {
        const response = await axios.get(`http://localhost:8000/api/user/${userPayload}/cart`);
        const mapData = response.data.data.cart;
        setOrders(mapData);
        alert("Item added to cart successfully");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="product-container">
        <div className="product-image">
          <img src={Product.src} alt="Product" />
        </div>
        <div className="product-details d-flex justify-content-center align-items-start flex-column vh-100">
          <h1 className="product-title">{Product.title}</h1>
          <p className="product-description">{Product.description}</p>
          <p className="product-price">₹ {Product.price}</p>
          <div className="buttons-container">
            {isItemInCart ? (
              <button
                className="add-to-cart"
                onClick={(e) => {
                  e.preventDefault();
                  if (isAuthenticated) {
                    navigate("/cartItems");
                  }
                }}
              >
                <MDBIcon fas icon="shopping-cart" className="p-2" />
                Go to Cart
              </button>
            ) : (
              <button
                className="add-to-cart"
                onClick={(e) => {
                  if (isAuthenticated) {
                    addToCart(Product._id, e);
                  } else {
                    alert("Sign up for your account");
                  }
                }}
              >
                <MDBIcon fas icon="shopping-cart" className="p-2" />
                Add to Cart
              </button>
            )}
            <button
              className="buy-button"
              onClick={() => {
                if (isAuthenticated) {
                  navigate("/payment");
                } else {
                  alert("Sign up for your account");
                }
              }}
            >
              <MDBIcon fas icon="hand-holding-usd" className="p-2" />
              Buy now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewProduct;
