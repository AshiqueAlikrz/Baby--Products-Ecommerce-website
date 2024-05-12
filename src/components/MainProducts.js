import React from "react";
import { MDBContainer, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCard, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userDataContext } from "../context/userDataContext";
import ShopppingCard from "./shoppingCard";
import "../styles/popularItems.css";

const MainProducts = () => {
  const { products } = useContext(userDataContext);
  // console.log("main products",products);

  const MainProducts = products.slice(0, 10);

  const navigate = useNavigate();

  return (
    <div>
      <div className="newproducts-title1-container" >
        <h1 className="newproducts-title1">Our products</h1>
      </div>
      <ShopppingCard popularProducts={MainProducts} />
    </div>
  );
};

export default MainProducts;
