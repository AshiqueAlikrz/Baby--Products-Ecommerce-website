import React, { useContext } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  MDBCardText,
} from "mdb-react-ui-kit";
import Navbar from "./navbar";
import Footer from "./Footer";
import { userDataContext } from "../userDataContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const AddCart = () => {
  const { setOrders, orders, LoginUser } = useContext(userDataContext);

  useEffect(() => {
    const userCartItems = async () => {
      try {
        const userId = LoginUser.id;
        const response = await axios.get(`http://localhost:8000/api/user/${userId}/cart`);
        const mapData = response.data.data.cart;
        setOrders(mapData);
        // console.log("mapData", mapData);
        // console.log("useffect");
      } catch (error) {
        console.error(error);
      }
    };
    userCartItems();
  }, [LoginUser, setOrders]);

  const handleQuantity = async (recvId, recNum) => {
    const userId = LoginUser.id;
    console.log("userId", userId);
    const productId = { id: recvId, num: recNum };
    console.log("productId", userId);
    await axios.put(`http://localhost:8000/api/user/${userId}/cart`, productId);
    const response = await axios.get(`http://localhost:8000/api/user/${userId}/cart`);
    const mapData = response.data.data.cart;
    setOrders(mapData);
  };

  const handleRemove = async (ProductId) => {
    const userId = LoginUser.id;
    await axios.delete(`http://localhost:8000/api/user/${userId}/cart/${ProductId}`);
    const response = await axios.get(`http://localhost:8000/api/user/${userId}/cart`);
    const mapData = response.data.data.cart;
    setOrders(mapData);
  };

  let totalPrice = 0;

  for (const order of orders) {
    totalPrice += order.qty * order.product.price;
  }
  console.log("totalPrice", totalPrice);

  const BuyClick = async () => {
    // console.log("orders", orders.product);
    const userId = LoginUser;
    console.log("paymentID", userId);
    const response = await axios.post(`http://localhost:8000/api/user/${userId}/payment`);
    };

  return (
    <div>
      <Navbar />

      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </MDBTypography>

                          <MDBTypography className="mb-0 text-muted">{orders.length} items</MDBTypography>
                        </div>

                        <hr className="my-4" />
                        {orders.map((values, index) => (
                          <MDBRow className="mb-4 d-flex justify-content-between align-items-center" key={index}>
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage src={values.product.src} fluid className="rounded-3" alt="Cotton T-shirt" />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <MDBTypography tag="h6" className="text-muted">
                                {values.product.title}
                              </MDBTypography>
                              <MDBTypography tag="h6" className="text-black mb-0">
                                {values.product.category}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                              <MDBBtn color="link" className="px-2" onClick={() => handleQuantity(values._id, -1)}>
                                <MDBIcon fas icon="minus" />
                              </MDBBtn>

                              <MDBInput type="number" min="1" value={values.qty} size="sm" />

                              <MDBBtn color="link" className="px-2" onClick={() => handleQuantity(values._id, +1)}>
                                <MDBIcon fas icon="plus" />
                              </MDBBtn>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                ₹ {values.qty * values.product.price}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="1" lg="1" xl="1" className="text-end">
                              <MDBIcon fas icon="times" onClick={() => handleRemove(values._id)} />
                            </MDBCol>
                            <hr className="my-4" />
                          </MDBRow>
                        ))}

                        <div className="pt-5">
                          <MDBTypography tag="h6" className="mb-0">
                            <MDBCardText tag="a" href="#!" className="text-body">
                              <MDBIcon fas icon="long-arrow-alt-left me-2" />
                              <Link to="/" className="text-black">
                                {" "}
                                Back to shop
                              </Link>
                            </MDBCardText>
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-dark">
                      <div className="p-5 bg-dark">
                        <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1 text-white">
                          Summary
                        </MDBTypography>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4"></div>

                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase text-white">
                            Total price
                          </MDBTypography>
                          <MDBTypography tag="h5" className="text-white">
                            ₹ {totalPrice}
                          </MDBTypography>
                        </div>

                        <MDBBtn color="warning" block size="lg" onClick={()=>BuyClick()}>
                          BUY
                        </MDBBtn>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer />
    </div>
  );
};

export default AddCart;
