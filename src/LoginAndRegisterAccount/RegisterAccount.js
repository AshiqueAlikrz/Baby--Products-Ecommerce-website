import React, { useContext, useState } from "react";
import "./Style.css";
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
import { userDataContext } from "../userDataContext";
import { useNavigate } from "react-router-dom";

const RegisterAccount = () => {
  const {
    Profile,
    setProfile,
    RegistrationData,
    setRegistrationData,
    isAuthenticated,
  } = useContext(userDataContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...RegistrationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (RegistrationData.email === "admin@gmail.com") {
      alert("Email already used");
    } else if (RegistrationData.password !== RegistrationData.confirmPassword) {
      alert("Passwords do not match");
    } else {

      const UserID = Profile.length;
      const FullName = RegistrationData.name;
      const Email = RegistrationData.email;
      const Password = RegistrationData.password;

      setProfile([
        ...Profile,
        { id: UserID, name: FullName, email: Email, password: Password, orders: [] },
      ]);

      alert("Registration successful!");
      navigate("/loginpage");
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
                  value={RegistrationData.name}
                  onChange={handleChange}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="E-mail"
                  id="form2"
                  type="email"
                  required
                  name="email"
                  value={RegistrationData.email}
                  onChange={handleChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form3"
                  name="password"
                  type="password"
                  value={RegistrationData.password}
                  onChange={handleChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Confirm Password"
                  id="form3"
                  type="password"
                  name="confirmPassword"
                  value={RegistrationData.confirmPassword}
                  onChange={handleChange}
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
