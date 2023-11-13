import React, { useContext, useEffect, useState } from "react";
import "./viewproducts.css";
import { MDBIcon } from "mdb-react-ui-kit";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";
import "./Style.css";
import Footer from "./Footer";
import { userDataContext } from "../userDataContext";
import { useNavigate } from "react-router-dom";
import { Axios } from "../App";

const ViewProduct = () => {
  const { isAuthenticated, userId, orders, setOrders } = useContext(userDataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [Product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`/api/user/products/${id}`);
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
      const userPayload = userId;
      console.log("user");
      const productPayload = { id: newItems };
      await Axios.post(`/api/user/${userPayload}/cart`, productPayload);
      const response = await Axios.get(`/api/user/${userPayload}/cart`);
      const mapData = response.data.data.cart;
      setOrders(mapData);
      alert("Item added to cart successfully");
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  console.log("orders", orders);

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
            {orders.some((item) => item.product._id === id) ? (
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
