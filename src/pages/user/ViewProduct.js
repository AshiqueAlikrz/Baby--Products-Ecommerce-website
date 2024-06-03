import React, { useContext, useEffect, useState } from "react";
import "../../styles/viewproducts.css";
import { MDBIcon } from "mdb-react-ui-kit";
import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import "../../styles/Style.css";
import Footer from "../../components/Footer";
import { userDataContext } from "../../context/userDataContext";
import { useNavigate } from "react-router-dom";
import { CiShoppingTag } from "react-icons/ci";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Axios } from "../../App";

const ViewProduct = () => {
  const { isAuthenticated, userId, orders, setOrders } = useContext(userDataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [Product, setProduct] = useState({});
  console.log("Product", Product);

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

  return (
    <div>
      <Navbar />
      <div className="product-container">
        <div className="product-left-container">
          <div className="product-left-inner-container">
            <div className="product-image-container">
              <img src={Product.src} alt="Product" />
            </div>
            <div className="product-button-container">
              <button
                className="product-addtocart-button"
                onClick={(e) => {
                  if (isAuthenticated) {
                    addToCart(Product._id, e);
                  } else {
                    alert("Sign up for your account");
                  }
                }}
              >
                ADD TO CART
              </button>
              <button
                className="product-buynow-button"
                onClick={() => {
                  if (isAuthenticated) {
                    navigate("/payment");
                  } else {
                    alert("Sign up for your account");
                  }
                }}
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        <div className="product-right-container">
          <div className="product-details-container">
            <h1 className="product-brand-text">{Product.brand}</h1>
            <h1 className="product-heading-text">Birkenstock</h1>
            <div className="product-price-container">
              <h1 className="product-price-text">{Product.price}</h1>
              {/* <div className=""> */}

              <h1 className="product-del-text">
                <del>555</del>
              </h1>
                <h1 className="product-offer-text">30% off</h1>
              {/* </div> */}
            </div>
            <h1 className="product-description-text">{Product.description}</h1>
            <p>
              <CiShoppingTag className="product-tag" />
              <strong>Bank Offer</strong> Get ₹50 instant discount on first Flipkart UPI txn on order of ₹200 and aboveT&C
            </p>
            <p>
              <CiShoppingTag className="product-tag" />
              <strong>Bank Offer</strong> 5% Cashback on Flipkart Axis Bank CardT&C
            </p>
            <p>
              <CiShoppingTag className="product-tag" />
              <strong>Bank Offer</strong> ₹1000 Off On HDFC Credit Card Non EMI Transactions.T&C
            </p>
            <p>
              <CiShoppingTag className="product-tag" />
              <strong>Special Price</strong> Get extra ₹5500 off (price inclusive of cashback/coupon)T&C
            </p>
          </div>
        </div>

        {/* <div className="product-details d-flex justify-content-center align-items-start flex-column vh-100">
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
                      navigate("/cartItems"); onClick={(e) => {
                    if (isAuthenticated) {
                      addToCart(Product._id, e);
                    } else {
                      alert("Sign up for your account");
                    }
                  }}
                    }
                  }}
                >
                  <MDBIcon fas icon="shopping-cart" className="p-2" />
                  Go to Cart
                </button>
              ) : (
                <button
                  className="add-to-cart"
                 
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
          </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default ViewProduct;
