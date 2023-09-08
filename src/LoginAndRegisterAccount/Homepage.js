import React from "react";
import "./Style.css";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "./navbar";
import {
  MDBContainer,
  MDBIcon,
  MDBCarousel,
  MDBCarouselItem,
  MDBCardBody,
  MDBCardImage,
  MDBCard,
  MDBCol,
  MDBRow,
  MDBFooter,
} from "mdb-react-ui-kit";
import MainProducts from "./MainProducts";
import MostPopular from "./MostPopular";


const Homepage = () => {
  return (
    <>
      <div className="nav-first">
        <Carousel
          interval={2000}
          prevIcon={null}
          nextIcon={null}
          indicators={false}
        >
          <Carousel.Item>
            <p className="carousel-text">
              ⛔ Visit Our Clearance Sale Store for Rock Bottom Prices *T&C
              Apply ⛔
            </p>
          </Carousel.Item>

          <Carousel.Item>
            <p className="carousel-text">
              🍁 CHECKOUT OUR LATEST AUTUMN WINTER COLLECTION 🍁
            </p>
          </Carousel.Item>

          <Carousel.Item>
            <p className="carousel-text">🍁 STAY WITH US , JOY WITH US 🍁 </p>
          </Carousel.Item>
        </Carousel>
      </div>
      <Navbar />

      <section id="Home">
        <MDBCarousel showControls >
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/368-2023_08_09-web_banner_travel.jpg"
            alt="..."
          />
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/368-2023_08_09-we_know_sleep.jpg"
            alt="..."
          />
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/318-2023_04_11-MC_HbyH_WebBanners_1920x640_13.02.23_2x_100.jpg"
            alt="..."
          />
        </MDBCarousel>
      </section>

      <MainProducts />
      
      <section>
        <h1 className="arrival-head">Why They Loving Us</h1>
        <div className="review-div">
          <img
            className="review-image"
            src="http://www.pngall.com/wp-content/uploads/2018/03/Child-PNG-Image.png"
          ></img>
          <h3 className="review-para">
            " This is the very good quality products. I hd ordered running shoes
            they delivered low quality. But in the picture look like very good
            item, I used with in one month shoes broke. customer service and
            delivery is good. It's ok "
          </h3>
          <img
            className="five-star"
            src="https://imgs.search.brave.com/wwBw84FYY_jMMgJc-s2h7GU93cZPaLqgOhjnp4HA0u8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNC81LVN0/YXItUmF0aW5nLVRy/YW5zcGFyZW50LnBu/Zw"
          ></img>
        </div>

        <div className="review-div2">
          <img
            className="review-image2"
            src="http://www.sproutpeds.com/wp-content/uploads/revslider/fable/slider_slide2_img1.png"
          ></img>
          <h3 className="review-para2">
            " Very good products for buying baby products and i got better
            quality items from this.Good customer service and higly discound by
            ordering od combo items "
          </h3>
          <img
            className="five-star2"
            src="https://imgs.search.brave.com/wwBw84FYY_jMMgJc-s2h7GU93cZPaLqgOhjnp4HA0u8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNC81LVN0/YXItUmF0aW5nLVRy/YW5zcGFyZW50LnBu/Zw"
          ></img>
        </div>
      </section>
      <MostPopular/>  

     

      <MDBCard className="mb-4 -lg-0">
        <MDBCardBody>
          <p>
            <strong>We accept</strong>
          </p>
          <MDBCardImage
            className="me-2"
            width="45px"
            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
            alt="Visa"
          />
          <MDBCardImage
            className="me-2"
            width="45px"
            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
            alt="American Express"
          />
          <MDBCardImage
            className="me-2"
            width="45px"
            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
            alt="Mastercard"
          />
          <MDBCardImage
            className="me-2"
            width="45px"
            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
            alt="PayPal acceptance mark"
          />
        </MDBCardBody>
      </MDBCard>

      <section>
        <MDBFooter
          bgColor="light"
          className="text-center text-lg-start text-muted"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="google" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="github" />
              </a>
            </div>
          </section>

          <section id="about-us">
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-5">
                <MDBCol md="3" lg="5" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <MDBIcon icon="gem" className="me-3" />
                    LOVED BABY PRODUCTS
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content.dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="" className="text-reset">
                      Footwear
                    </a>
                  </p>
                  <p>
                    <a href="" className="text-reset">
                      Accessories
                    </a>
                  </p>
                  <p>
                    <a href="" className="text-reset">
                      Baby Care
                    </a>
                  </p>
                  <p>
                    <a href="" className="text-reset">
                      Kids Clothing
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="" className="text-reset">
                      Help
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    babycare@example.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              BabyCare.com
            </a>
          </div>
        </MDBFooter>
      </section>
    </>
  );
};

export default Homepage;
