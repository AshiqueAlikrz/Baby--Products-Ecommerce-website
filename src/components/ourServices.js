import React from "react";
import "../styles/ourServices.css";
import { SiZara } from "react-icons/si";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { TbDiscount } from "react-icons/tb";

const OurServices = () => {
  return (
    <div>
      <div className="service-container">
        <div className="service-subcontainer">
          <MdOutlineLocalShipping className="service-icon" />
          <h1 className="service-heading">Free Shipping</h1>
          <p className="service-subheading">Orders from all item</p>
        </div>
        <div className="service-subcontainer">
          <MdOutlineAssignmentReturn className="service-icon" />
          <h1 className="service-heading">Easy Return Policy</h1>
          <p className="service-subheading">If goods have problems.</p>
        </div>
        <div className="service-subcontainer">
          <IoChatboxEllipsesOutline className="service-icon" />
          <h1 className="service-heading">Customer Service</h1>
          <p className="service-subheading">We support online all days.</p>
        </div>
        <div className="service-subcontainer">
          <CiCreditCard1 className="service-icon" />
          <h1 className="service-heading">Flexible Payment</h1>
          <p className="service-subheading">Pay with multiple cards.</p>
        </div>
        <div className="service-subcontainer">
          <TbDiscount className="service-icon" />
          <h1 className="service-heading">Member Discount</h1>
          <p className="service-subheading">On every order over $120.</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
