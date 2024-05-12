import React from "react";
import { MDBContainer, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCard, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userDataContext } from "../context/userDataContext";
import ShopppingCard from "./shoppingCard";
import "../styles/popularItems.css";

const MostPopular = () => {
  const { products } = useContext(userDataContext);
  console.log("products", products);
  const popularProducts = products.filter((value) => value.status === "popular");
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1 className="arrival-head">Most Popular Items</h1>
      </div>
      <div className="popular-container">
        <ShopppingCard popularProducts={popularProducts} />
      </div>
    </>
  );
};

export default MostPopular;
