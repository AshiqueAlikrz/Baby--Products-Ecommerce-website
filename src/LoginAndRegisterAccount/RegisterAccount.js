// import React, { useContext, useState } from "react";
import "./Style.css";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import BabyImage from "./attachment_87322237-removebg-preview.png";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
// import { userDataContext } from "../userDataContext";
// import { useNavigate } from "react-router-dom";


const RegisterAccount = () => {
  // const { Profile, setRegistrationData, isAuthenticated } =
  //   useContext(userDataContext);

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const FullName = e.target.name.value.trim();
    const Email = e.target.email.value.trim();
    const Password = e.target.password.value.trim();

    if (Email === "admin@gmail.com") {
      alert("Email already used");
    } else {

      const payload = {
        name: FullName,
        email: Email,
        password: Password,
      };

      // setProfile([
      //   ...Profile,
      //   {
      //     id: UserID,
      //     name: FullName,
      //     email: Email,
      //     password: Password,
      //     orders: [],
      //   },
      // ]);

      console.log(payload);
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user/register",
          payload
        );
        console.log(response);
        // console.log(" registration successful");
        alert("registered");
      } catch (err) {
        console.log(err);
        alert("Error: " + err.message);
      }

      // alert("Registration successful!");
      // navigate("/loginpage");
    }
  };

  return (
    <div>
      <Navbar />
      <MDBContainer className="my-5 gradient-form d-flex justify-content-center align-items-center flex-column ">
        <form onSubmit={handleSubmit} className="w-50">
          <MDBRow className="w-100">
            <MDBCol col="6" className="mb-5 ">
              <div className="d-flex flex-column  ">
                <div className="text-center">
                  <img src={BabyImage} style={{ width: "185px" }} alt="logo" />
                </div>
                <h4> Sign up account</h4>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Full Name"
                  id="form1"
                  type="text"
                  name="name"
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="E-mail"
                  id="form2"
                  type="email"
                  name="email"
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form3"
                  name="password"
                  type="password"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Confirm Password"
                  id="form3"
                  type="password"
                  name="confirmPassword"
                />

                <div className="text-center pt-1 pb-1">
                  <MDBBtn
                    className="mb-4 w-100 gradient-custom-2 register-text"
                    type="submit"
                  >
                    Register
                  </MDBBtn>

                  <h5>
                    {" "}
                    <Link to="/Loginpage">Already have an account</Link>
                  </h5>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    </div>
  );
};

export default RegisterAccount;
