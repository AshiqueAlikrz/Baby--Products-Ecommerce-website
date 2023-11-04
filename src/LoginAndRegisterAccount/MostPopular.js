import React from "react";
import { MDBContainer, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCard, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userDataContext } from "../userDataContext";

const MostPopular = () => {
  const { products } = useContext(userDataContext);
  const popularProducts = products.filter((value) => value.status === "popular");
  const navigate = useNavigate();

  return (
    <div>
      <MDBContainer fluid className="my-5 ">
        <MDBRow className="m-3">
          <h1 className="arrival-head">Most Popular Items</h1>
          {popularProducts.map((value) => (
            <MDBCol
              xl="3"
              lg="4"
              md="4"
              sm="6"
              key={value._id}
              onClick={() => navigate(`/productdetails/${value._id}`)}
            >
              <MDBCard className="text-black ">
                <MDBCardImage src={value.src} alt="Apple Computer" />
                <MDBCardBody>
                  <div className="text-center">
                    <MDBCardTitle>{value.title}</MDBCardTitle>
                    <p className="text-muted mb-4"></p>
                  </div>
                  {value.qty < 1 && <h6 style={{ color: "red", fontWeight: "bold" }}>Out of Stock</h6>}
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Total</span>
                    <span>₹ {value.price}</span>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>Brand </span>
                      <span>{value.brand}</span>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default MostPopular;
