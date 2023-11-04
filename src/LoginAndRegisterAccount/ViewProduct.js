import React, { useContext, useEffect, useState } from "react";
import "./viewproducts.css";
import { MDBIcon } from "mdb-react-ui-kit";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";
import "./Style.css";
import Footer from "./Footer";
import { userDataContext } from "../userDataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ViewProduct = () => {
  const {  cartItems, setCartItems, isAuthenticated,LoginUser,setusers,users } = useContext(userDataContext);
  const { id } = useParams();
  // console.log("idssss:",id);
  const navigate = useNavigate();

  const [Product, setProduct] = useState([]);

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

  // console.log(Product);

  const addToCart = async (newItems) => {
    try {
      const productPayload = newItems;
      const userPayload = LoginUser.email;
      const response = await axios.post(`http://localhost:8000/api/user/${userPayload}/cart/${productPayload}`);
      const userDetails = response.data;
      setusers(response);
      addToCart();
      console.log("users",users);
      alert("cart added successfully")
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="product-container">
        <div className="product-image ">
          <img src={Product.src} alt="Product" />
        </div>
        <div className="product-details d-flex justify-content-center align-items-start flex-column vh-100">
          <h1 className="product-title ">{Product.title}</h1>
          <p className="product-description ">{Product.description}</p>
          <p className="product-price">₹ {Product.price}</p>
          <button
            className="add-to-cart"
            onClick={() => {
              if (isAuthenticated) {
                addToCart(Product._id) || alert("item added successfully");
              } else {
                alert("sign up your account");
              }
            }}
          >
            {" "}
            <MDBIcon fas icon="shopping-cart" className="p-2" />
            Add to Cart
          </button>
          <button
            className="buy-button"
            onClick={() => {
              if (isAuthenticated) {
                navigate("/payment");
              } else {
                alert("sign up your account");
              }
            }}
          >
            <MDBIcon fas icon="hand-holding-usd" className="p-2" />
            Buy now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewProduct;
