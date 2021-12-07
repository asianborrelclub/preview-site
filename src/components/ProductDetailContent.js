import React, { Component } from "react";
import "./ProductPageContent.scss";
import "./ProductDetailContent.scss"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hoodieFront from "../img/merch/hoodie_front.jpg";
import hoodieBack from "../img/merch/hoodie_back.jpg";


class ProductDetailContent extends Component {
    render() {
        return (
          <>
            <div className="product-page">
              <div className="landing-page">
                <div className="hoodie-graphic">
                  <Carousel
                    emulateTouch={true}
                    infiniteLoop={true}
                    dynamicHeight={true}
                    showThumbs={true}
                    autoPlay={false}
                    showStatus={false}
                  >
                    <div>
                      <img src={hoodieFront} alt="front of hoodie" />
                    </div>
                    <div>
                      <img src={hoodieBack} alt="back of hoodie" />
                    </div>
                  </Carousel>
                </div>
                <div className="hoodie-info size">
                  <h1 className="title">ABC’s First Edition: Panda Hoodie</h1>
                  <br />
                  <span className="pricetag">€34,99</span>
                  <br />
                  <div className="undertitle">
                    All profits are to be allocated to future ABC events, which
                    therefore means that all profits remain in the association to
                    effectuate our vision, mission and goals.
                  </div>

                  <div className="sizelabel"> Size</div>
                  <div class="row">
  <div class="col">S</div>
  <div class="col">M</div>
  <div class="col">L</div>
  <div class="col">XL</div>
  <div class="col">XLL</div>

</div>
           
               

                  size guide(todo)

                  <div className="sizelabel"> Pre-Order</div>


    
                  <h2>Delivery & payment</h2>
                  <div className="details">
                  <div>Standard Home Delivery €6/ Free over €100 in 4-5 workind days  </div>
                  <div>Standard Pickup Location €6/ Free over €100 in 4-5 workind days  </div>
                  <div>Climat-smart Home Delivery €6/ Free over €100 in 4-5 workind days  </div>
                  </div>
                  <h2>Details</h2>
                  <div className="details">
                    <div>Material: 50% Cotton 50% polyester </div>
                    <div>Weight: 270 g/m²</div>
                    <div>Model: Unisex</div>
                    <div>Fabric color: Black</div>
                  </div>

                </div>
              </div>
              
              </div>

          </>
        );
      }
    }



export default ProductDetailContent