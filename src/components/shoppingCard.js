import React from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import "../styles/popularItems.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Meta } = Card;

const ShopppingCard = ({ popularProducts }) => {
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
            <div className="card1" key={data.id}>
              <img src={data.src} alt={data.title} className="card-image1" />
              <div className="card-subcontainer">
                <span className="cardby-name1">{data.title}</span>
                <span className="card-description">{data.description.slice(13, 36)} </span>
                <span className="card-price">{`${"₹" + "117" + "." + randomNumber + index}`}</span>
                <span>Upto 40% offer</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ShopppingCard;
