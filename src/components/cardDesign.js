import React from "react";
import "../styles/popularItems.css";

const CardDesign = ({ popularProducts }) => {
  const randomNumber = Math.floor(Math.random() * 10);

  return (
    <div style={{ width: "auto", gap: "20px", alignItems: "center", minHeight: "450px", display: "flex", flexWrap: "wrap", whiteSpace: "nowrap" }}>
      {popularProducts.map((data, index) => (
        <div className="card1" key={data.id} style={{ flexDirection: "column" }}>
          <img src={data.src} alt={data.title} className="card-image1" />
          <div className="card-subcontainer">
            <span className="cardby-name1">{data.title}</span>
            <span className="card-description">{data.description.slice(13, 36)} </span>
            <span className="card-price">{`${"₹" + "117" + "." + randomNumber + index}`}</span>
            <span>Upto 40% offer</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDesign;
