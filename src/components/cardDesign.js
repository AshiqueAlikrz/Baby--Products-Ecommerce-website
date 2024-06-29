import React from "react";
import "../styles/popularItems.css";
import { useNavigate } from "react-router-dom";
const CardDesign = ({ popularProducts }) => {

  const navigate = useNavigate();
  const randomNumber = Math.floor(Math.random() * 10);
  
  const handleLikeClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div style={{ width: "auto", gap: "20px", alignItems: "center", minHeight: "450px", display: "flex", flexWrap: "wrap", whiteSpace: "nowrap" }}>
      {popularProducts.map((data, index) => (
        <div className="card1" key={data.id} style={{ flexDirection: "column" }} onClick={() => navigate(`/productdetails/${data._id}`)}>
              <label class="ui-like" onClick={handleLikeClick}>
                <input type="checkbox" />
                <div class="like">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
                    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                    <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
                    </g>
                  </svg>
                </div>
              </label>
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
