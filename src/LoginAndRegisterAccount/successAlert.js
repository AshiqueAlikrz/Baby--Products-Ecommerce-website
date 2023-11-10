import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./paymentSucess.css";
import "./loader.css";
import { useNavigate } from "react-router-dom";

const SuccessAlert = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate =useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:8000/api/user/payment/success`);
      setTimeout(() => {
        setIsChecked(true);
        setTimeout(() => {
            navigate('/');
          }, 10000);
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
          <div class="loading">
            <span class="l">M</span>
            <span class="o">a</span>
            <span class="a">k</span>
            <span class="d">i</span>
            <span class="i">n</span>
            <span class="n">g</span>
            <span>&nbsp;</span>
            <span class="g">P</span>
            <span class="d1">a</span>
            <span class="d2">y</span>
            <span class="d3">m</span>
            <span class="d4">e</span>
            <span class="d5">n</span>
            <span class="d6">t</span>
            <span class="d7">.</span>
            <span class="d8">.</span>
            <span class="d9">.</span>
            <div class="load">
              <div class="progress"></div>
              <div class="progress"></div>
              <div class="progress"></div>
              <div class="progress"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessAlert;
