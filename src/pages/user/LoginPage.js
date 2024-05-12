import React, { useContext } from "react";
import "../../styles/Style.css";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import BabyImage from "../../assets/attachment_87322237-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar2";
import Footer from "../../components/Footer";
import { userDataContext } from "../../context/userDataContext";
import { Axios } from "../../App";
import {  toast } from "react-toastify";

const LoginPage = () => {
  const { setIsAuthenticated, setLoginUser } = useContext(userDataContext);
  const navigate = useNavigate();

  const toCreateAccount = () => {
    navigate("/registeraccount");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    const payload = { email, password };

    if (payload) {
      try {
        const responseUser = await Axios.post("/api/user/login", payload);
        console.log(responseUser);
        const userData = responseUser.data.data;
        localStorage.setItem("jwt_token", userData.jwt_token);
        localStorage.setItem("id", userData.id);
        localStorage.setItem("name", userData.name);
        localStorage.setItem("username", userData.username);

        setIsAuthenticated(true);
        navigate("/");
        toast.success(responseUser.data.message);
      } catch (errorUser) { 
        try {
          await Axios.post("/api/admin/login", payload);
          alert("Admin logging successful");
          window.location.replace("/user");
        } catch (errorAdmin) {
          console.error(errorAdmin);
          alert("Invalid Email or Password");
        }
      }
    } else {
      alert("Invalid email or password");
    }

    setTimeout(() => {
      localStorage.clear();
      setIsAuthenticated(false);
    }, 3600000);
  };

  return (
    <>
      <Navbar />
      <MDBContainer className="my-5 gradient-form d-flex justify-content-center align-items-center flex-column vh-100">
        <form onSubmit={handleSubmit}>
          <MDBRow>
            <MDBCol col="6" className="mb-5">
              <div className="d-flex flex-column">
                <div className="text-center">
                  <img src={BabyImage} style={{ width: "185px" }} alt="logo" />
                </div>
                <p>Please login to your account</p>
                <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email" name="email" />
                <MDBInput wrapperClass=" mb-4" label="Password" id="form2" type="password" name="password" />
                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn className="mb-4 w-100 gradient-custom-2" type="submit">
                    Login
                  </MDBBtn>

                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0">Don't have an account?</p>
                  <MDBBtn outline className="mx-2" color="danger" onClick={toCreateAccount}>
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
