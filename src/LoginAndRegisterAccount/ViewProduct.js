import React, { useContext } from "react";
import "./viewproducts.css";
import { MDBIcon } from "mdb-react-ui-kit";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";
import "./Style.css";
import Footer from "./Footer";
import { userDataContext } from "../userDataContext";
import { useNavigate } from "react-router-dom";

const ViewProduct = () => {
  const { Delete, cartItems, setCartItems, isAuthenticated } =
    useContext(userDataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const addToCart = (newItems) => {
    const itemsIncart = cartItems.filter((items) => items.id === newItems.id);
    if (itemsIncart.length === 0) {
      setCartItems([...cartItems, newItems]);
    }
  };

  

  return (
    <div>
      <Navbar />
      <div className="product-container">
        <div className="product-image ">
          <img src={Delete[id-1].src} alt="Product" />
        </div>
        <div className="product-details d-flex justify-content-center align-items-start flex-column vh-100">
          <h1 className="product-title ">{Delete[id-1].name}</h1>
          <p className="product-description ">
            {Delete[id-1].description}
          </p>
          <p className="product-price">₹ {Delete[id-1].price}</p>
          <button
            className="add-to-cart"
            onClick={() => {
              if (isAuthenticated) {
                addToCart(Delete[id-1]) ||
                  alert("item added successfully");
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
