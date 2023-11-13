import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./paymentSucess.css";
import "./loader.css";
import { useNavigate } from "react-router-dom";

const SuccessAlert = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:8000/api/user/payment/success`);
      setTimeout(() => {
        setIsChecked(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }, 6000);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isChecked ? (
        <>
          <svg width="400" height="400" className="svg-imagee">
            <circle
              fill="none"
              stroke="#68E534"
              strokeWidth="20"
              cx="200"
              cy="200"
              r="190"
              className="circle"
              strokeLinecap="round"
              transform="rotate(-90 200 200)"
            />
            <polyline
              fill="none"
              stroke="#68E534"
              strokeWidth="24"
              points="88,214 173,284 304,138"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tick"
            />
          </svg>

          <h2>Payment Success</h2>
        </>
      ) : (
        <div>
          <div className="loading">
            <span className="l">M</span>
            <span className="o">a</span>
            <span className="a">k</span>
            <span className="d">i</span>
            <span className="i">n</span>
            <span className="n">g</span>
            <span>&nbsp;</span>
            <span className="g">P</span>
            <span className="d1">a</span>
            <span className="d2">y</span>
            <span className="d3">m</span>
            <span className="d4">e</span>
            <span className="d5">n</span>
            <span className="d6">t</span>
            <span className="d7">.</span>
            <span className="d8">.</span>
            <span className="d9">.</span>
            <div className="load">
              <div className="progress"></div>
              <div className="progress"></div>
              <div className="progress"></div>
              <div className="progress"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessAlert;
