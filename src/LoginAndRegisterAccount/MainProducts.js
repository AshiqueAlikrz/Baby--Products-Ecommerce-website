import React from 'react'
import {
    MDBContainer,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCard,
    MDBCol,
    MDBRow,
  } from "mdb-react-ui-kit";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { userDataContext } from "../userDataContext";



const MainProducts = () => {
  const {products}=useContext(userDataContext)
  // console.log("main products",products);

  const MainProducts=products.slice(0,8);
  
    const navigate =useNavigate()

    
          return (
    <div>
         <section id="card-product">
        <MDBContainer fluid className="my-5  ">
          <MDBRow className="m-3">
            <h1 className="arrival-head">Our Products</h1>

            {MainProducts.map(value=>(
            <MDBCol  xl="3" lg="4" md="4" sm="6" key={value._id} onClick={()=>navigate(`/productdetails/${value._id}`)}>
              <MDBCard className="text-black ">
                <MDBCardImage
                  src={value.src}
                  position="top"
                  alt="Apple Computer"
                />
                <MDBCardBody>
                  <div className="text-center">
                    <MDBCardTitle>
                      {value.title}
                    </MDBCardTitle>
                    <p className="text-muted mb-4"></p>
                  </div>
                 
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <h5>Total</h5>
                    <span>₹ {value.price}</span>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>Brand</span>
                      <span>{value.brand}</span>
                    </div>
                   
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
              ))}
          </MDBRow>
        </MDBContainer>
      </section>
      
    </div>
  )
}

export default MainProducts
