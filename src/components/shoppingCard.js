import React from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import "../styles/popularItems.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const ShopppingCard = ({ popularProducts }) => {
  console.log("popularProducts", popularProducts);
  const navigate = useNavigate();
  const randomNumber = Math.floor(Math.random() * 10);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="newproducts-container1">
        <Slider {...settings}>
          {popularProducts.map((data, index) => (
            <div className="card1" key={data.id} onClick={() => navigate(`/productdetails/${data._id}`)}>
              <img src={data.src} alt={data.title} className="card-image1" />
              <div className="card-subcontainer">
                <span className="card-brandname">Allen Solly</span>
                <span className="cardby-name1">{data.title}</span>
                <span className="card-price">{`${"₹" + "117" + "." + randomNumber + index}`}</span>
                <span>upto 40% offer</span>
                {/* <label class="container">
                  <input type="checkbox" />
                  <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xmlXspace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path>
                  </svg>
                </label> */}
              </div>
            </div>
          ))}
        </Slider>
        <div className="card-button-container">
          <button className="card-button" onClick={()=>navigate("/showmoreproducts")}>
            Show more
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopppingCard;
