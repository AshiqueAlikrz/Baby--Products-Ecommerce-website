import React from 'react'
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "../../styles/Style.css"
import Navbar from '../../components/navbar2';
import Footer from '../../components/Footer'




const about = () => {
  return (
    <div> 
      <Navbar />
      <h1 className='dumbell-head'>United States Favourite Baby Store</h1>
            <img className='dumbell-img' src="https://www.daimanuel.com/wp-content/uploads/2011/12/BabyBarbell.jpg"></img>
            <Footer />
    </div>
  )
}

export default about
