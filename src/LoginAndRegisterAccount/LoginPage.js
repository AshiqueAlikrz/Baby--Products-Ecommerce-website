import React from "react";
import "./Style.css";
import { useContext } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import BabyImage from "./attachment_87322237-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import { userDataContext } from "../userDataContext";

const LoginPage = () => {
  const {  LoginData, setLoginData ,RegistrationData,setIsAuthenticated} = useContext(userDataContext);

  const navigate = useNavigate();

  const toCreateAccount = () => {
    navigate("/registeraccount");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...LoginData, [name]: value });
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (LoginData.email === RegistrationData.email && LoginData.password === RegistrationData.password) {
      setIsAuthenticated(true)
      navigate("/");
    } else if (LoginData.email === "admin@gmail.com" && LoginData.password === "123") {
      navigate("/user");
    } else {
      alert('Invalid Email or Password');
    }
  };
  
 
  return (
    <>
      <Navbar />
      <MDBContainer className="my-5  gradient-form d-flex justify-content-center align-items-center flex-column vh-100">
        <form onSubmit={handleSubmit}>
          <MDBRow>
            <MDBCol col="6" className="mb-5 ">
              <div className="d-flex flex-column ">
                <div className="text-center">
                  <img src={BabyImage} style={{ width: "185px" }} alt="logo" />
                </div>
                <p>Please login to your account</p>
                <MDBInput
                  wrapperClass="mb-4 "
                  label="Email address"
                  id="form1"
                  type="email"
                  name="email"
                  value={LoginData.email}
                  onChange={handleChange}
                />
                <MDBInput
                  wrapperClass=" mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                  name="password"
                  value={LoginData.password}
                  onChange={handleChange}
                />
                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn
                    className="mb-4 w-100 gradient-custom-2"
                    type="submit"
                  >
                    Login
                  </MDBBtn>
                
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0">Don't have an account?</p>
                  <MDBBtn
                    outline
                    className="mx-2"
                    color="danger"
                    onClick={toCreateAccount}
                  >
                    create an account
                  </MDBBtn>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default LoginPage;
