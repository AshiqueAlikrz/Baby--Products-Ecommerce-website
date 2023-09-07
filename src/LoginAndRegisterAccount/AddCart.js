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

const AddCart = () => {
  const {
    cartItems,
    setCartItems,
    setTotalPrice,
    isAuthenticated,
    loginEmail,
    Profile,
    setProfile,
    RegistrationData
  } = useContext(userDataContext);

  const handleIncreaseQuantity = (recvId) => {
    const cartPlus = cartItems.map((data) => {
      if (data.id === recvId) {
        return { ...data, qty: data.qty + 1 };
      }
      return data;
    });
    setCartItems(cartPlus);
  };

  const handleDecreaseQuantity = (id) => {
    const cartMinus = cartItems.map((data) => {
      if (data.id === parseInt(id) && data.qty > 1) {
        return { ...data, qty: data.qty - 1 };
      }
      return data;
    });
    setCartItems(cartMinus);
  };

  const navigate = useNavigate();
  let totalPrice = 0;

  cartItems.forEach((element) => {
    totalPrice += element.price * element.qty;
  });

  const handleRemove = (id) => {
    const afterRemoved = cartItems.filter((item) => item.id !== parseInt(id));
    setCartItems(afterRemoved);
  };

  const BuyClick = (e) => {
    e.preventDefault();
  
    if (isAuthenticated) {
      if (cartItems.length!==0) {
        const newOrder = cartItems.map((data, index) => ({
          orderId: index,
          items: data.name,
          quantity: data.qty,
          price: data.price,
          totalprice: data.qty * data.price,
        }));

        const updatedProfileArray = Profile.map((user) => {
          if (user.name === RegistrationData.name) {
            return {
              ...user,
              orders: [...user.orders, ...newOrder],
            };
          }
          return user;
        });

        setProfile(updatedProfileArray);
        alert("Order placed");
        setCartItems([])
      } 
    }else {
      alert("User not found");
    }
  };
  
  return (
    <div>
      <Navbar />

      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography
                            tag="h1"
                            className="fw-bold mb-0 text-black"
                          >
                            Shopping Cart
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            {cartItems.length} items
                          </MDBTypography>
                        </div>

                        <hr className="my-4" />
                        {cartItems.map((items, index) => (
                          <MDBRow
                            className="mb-4 d-flex justify-content-between align-items-center"
                            key={index}
                          >
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                                src={items.src}
                                fluid
                                className="rounded-3"
                                alt="Cotton T-shirt"
                              />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <MDBTypography tag="h6" className="text-muted">
                                {items.name}
                              </MDBTypography>
                              <MDBTypography
                                tag="h6"
                                className="text-black mb-0"
                              >
                                {items.category}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol
                              md="3"
                              lg="3"
                              xl="3"
                              className="d-flex align-items-center"
                            >
                              <MDBBtn
                                color="link"
                                className="px-2"
                                onClick={() => handleDecreaseQuantity(items.id)}
                              >
                                <MDBIcon fas icon="minus" />
                              </MDBBtn>

                              <MDBInput
                                type="number"
                                min="1"
                                value={items.qty}
                                size="sm"
                              />

                              <MDBBtn
                                color="link"
                                className="px-2"
                                onClick={() => handleIncreaseQuantity(items.id)}
                              >
                                <MDBIcon fas icon="plus" />
                              </MDBBtn>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                ₹ {items.qty * items.price}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="1" lg="1" xl="1" className="text-end">
                              <MDBIcon
                                fas
                                icon="times"
                                onClick={() => handleRemove(items.id)}
                              />
                            </MDBCol>
                            <hr className="my-4" />
                          </MDBRow>
                        ))}

                        <div className="pt-5">
                          <MDBTypography tag="h6" className="mb-0">
                            <MDBCardText
                              tag="a"
                              href="#!"
                              className="text-body"
                            >
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
                        <MDBTypography
                          tag="h3"
                          className="fw-bold mb-5 mt-2 pt-1 text-white"
                        >
                          Summary
                        </MDBTypography>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4"></div>

                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography
                            tag="h5"
                            className="text-uppercase text-white"
                          >
                            Total price
                          </MDBTypography>
                          <MDBTypography tag="h5" className="text-white">
                            ₹ {totalPrice}
                          </MDBTypography>
                        </div>

                        <MDBBtn
                          color="warning"
                          block
                          size="lg"
                          onClick={BuyClick}
                        >
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
