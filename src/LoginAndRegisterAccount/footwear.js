import React from 'react'
import { useContext } from 'react'
import { userDataContext } from '../userDataContext'
import { useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCard,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';


const Footwear = () => {
    const {productsDeatils}=useContext(userDataContext)
    const FootFiltered=productsDeatils.filter((item)=>item.category==="footwear")
    const navigate = useNavigate();
  return (
    <div>
          <section id="card-product">
        <MDBContainer fluid className="my-5">
          <MDBRow className="m-3">
            
            <h1 className="arrival-head">Footwear and Accessories</h1>
            {FootFiltered.map((item) => (
              <MDBCol xl="3" lg="4" md="4" sm="6" key={item.id} onClick={()=>navigate(`/productdetails/${item.id}`)}>
                <MDBCard className="text-black">
                  <MDBCardImage src={item.src} position="top" alt={item.name} />
                  <MDBCardBody>
                    <div className="text-center">
                      <MDBCardTitle>{item.name}</MDBCardTitle>
                      <p className="text-muted mb-4"></p>
                    </div>

                    <div className="d-flex justify-content-between total font-weight-bold mt-4">
                      <h5>Total</h5>
                      <span>₹ {item.price}</span>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between">
                        <span>Brand</span>
                        <span>{item.brand}</span>
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

export default Footwear
