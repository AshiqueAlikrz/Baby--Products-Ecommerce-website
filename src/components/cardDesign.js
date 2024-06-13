import React from "react";
import "../styles/popularItems.css";
import { useNavigate } from "react-router-dom";
const CardDesign = ({ popularProducts }) => {

  const navigate = useNavigate();
  const randomNumber = Math.floor(Math.random() * 10);

  return (
    <div style={{ width: "auto", gap: "20px", alignItems: "center", minHeight: "450px", display: "flex", flexWrap: "wrap", whiteSpace: "nowrap" }}>
      {popularProducts.map((data, index) => (
        <div className="card1" key={data.id} style={{ flexDirection: "column" }} onClick={() => navigate(`/productdetails/${data._id}`)}>
          <img src={data.src} alt={data.title} className="card-image1" />
          <div className="card-subcontainer">
            <span className="card-brandname">Allen Solly</span>
            <span className="cardby-name1">{data.title}</span>
            <span className="card-price">{`${"₹" + "117" + "." + randomNumber + index}`}</span>
            <span>upto 40% offer</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDesign;
