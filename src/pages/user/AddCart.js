import React, { useContext } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography, MDBCardText } from "mdb-react-ui-kit";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import { userDataContext } from "../../context/userDataContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Axios } from "../../App";

const AddCart = () => {
  const { setOrders, orders, LoginUser, userId } = useContext(userDataContext);

  useEffect(() => {
    const userCartItems = async () => {
      try {
        const userID = userId;
        const response = await Axios.get(`/api/user/${userID}/cart`);
        const mapData = response.data.data.cart;
        setOrders(mapData);
      } catch (error) {
        console.error(error);
      }
    };
    userCartItems();
  }, [userId, setOrders]);

  const handleQuantity = async (recvId, recNum) => {
    const userID = userId;
    const productId = { id: recvId, num: recNum };
    console.log("productId", userId);
    await Axios.put(`/api/user/${userId}/cart`, productId);
    const response = await Axios.get(`/api/user/${userID}/cart`);
    const mapData = response.data.data.cart;
    setOrders(mapData);
  };

  const handleRemove = async (ProductId) => {
    const userID = userId;
    await Axios.delete(`/api/user/${userId}/cart/${ProductId}`);
    const response = await Axios.get(`api/user/${userID}/cart`);
    const mapData = response.data.data.cart;
    setOrders(mapData);
  };

  let totalPrice = 0;

  for (const order of orders) {
    totalPrice += order.qty * order.product.price;
  }

  const BuyClick = async () => {
    const userID = userId;
    const response = await Axios.post(`/api/user/${userID}/payment`);
    window.open(response.data.url);
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
                    <MDBCol lg="4" className="bg-white">
                      <div className="p-5 bg-light">
                        <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1 text-white">
                          Summary
                        </MDBTypography>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4"></div>

                        <div className="d-flex justify-content-between flex-column mb-5">
                          <div className="d-flex justify-content-between">
                            <MDBTypography  className=" text-dark">
                              Delivery Charges
                            </MDBTypography>
                            <MDBTypography  className="text-dark">
                              ₹40
                            </MDBTypography>
                          </div>

                          <div className="d-flex justify-content-between">
                            <MDBTypography  className=" text-dark">
                              Discount{" "}
                            </MDBTypography>
                            <MDBTypography  className="text-success">
                            ₹400
                            </MDBTypography>
                          </div>

                          <div className="d-flex justify-content-between">
                            <MDBTypography tag="h5" className=" text-dark">
                              Total Amount
                            </MDBTypography>
                            <MDBTypography tag="h5" className="text-dark">
                              ₹ {totalPrice}
                            </MDBTypography>
                          </div>
                        </div>
                        {/* <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase text-dark">
                            Total price
                          </MDBTypography>
                          <MDBTypography tag="h5" className="text-dark">
                            ₹ {totalPrice}
                          </MDBTypography>
                        </div> */}

                        <MDBBtn color="warning" block size="lg" onClick={() => BuyClick()}>
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
