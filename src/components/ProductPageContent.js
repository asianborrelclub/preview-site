import React, { Component } from "react";
import "./ProductPageContent.scss";
import ProductForm from "./ProductForm";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hoodieFront from "../img/merch/hoodie_front.jpg";
import hoodieBack from "../img/merch/hoodie_back.jpg";
import hoodieA from "../img/merch/hoodie_a.png";
import hoodieB from "../img/merch/hoodie_b.png";

class ProductPageContent extends Component {
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
                showThumbs={false}
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
            <div className="hoodie-info">
              <h1 className="title">ABC First Edition Panda Hoodie</h1>
              <span className="pricetag">€39,99</span>
              <br />
              <div className="undertitle">
                <div>Hey there!</div>
                <div>
                  Thanks for showing interest in the Asian Borrel Club official
                  Hoodie.
                </div>
                <div>
                  We made the perfect hoodie to represent the association!
                </div>
                <div>Are u a real beauty and at the same time a bit moody?</div>
                <div>Order our ABC First Edition Panda Hoodie!</div>
              </div>

              <h2>Details</h2>
              <div className="details">
                <div>Material: 50% Cotton 50% polyester </div>
                <div>Weight: 270 g/m²</div>
                <div>Model: Unisex</div>
                <div>Fabric color: Black</div>
              </div>
              <div className="hoodie-cta">
                <a href="#hoodie-preorder">
                  <button className="btn-preorder">Pre-order</button>
                </a>
                <a href="#hoodie-more-info">
                  <button className="btn-info">More info</button>
                </a>
              </div>
            </div>
          </div>
          <div id="hoodie-more-info" className="hoodie-section-a">
            <div className="hoodie-section-a-text">
              <h1>Meet our first ABC Hoodie!</h1>
              <p>
                Our design is a first edition version of our ABC hoodie and we
                are going to tell you something about it. On the front of the
                hoodie is the well-known ABC Logo. On the back we have a
                hand-made design with inspiration of Asian culture! You see a
                ring of connected bamboo sticks, which reflects our warm and
                welcoming culture where everyone is being treated as friends. In
                the middle you see a panda, representing our members, looking at
                the countless opportunities in life in the form of a mountain.
              </p>
              <h1> Hoodie meetup</h1>
              <p>
                For the delivery of your Hoodie you can choose between 2 options
                (check the box in the order form). Send it to your home or come
                attend the Hoodie Meetup Event on the 10th of July! During the
                hoodie meetup you will have the chance to meet other ABC members
                and make new friends! We will have a drink together and maybe
                even play some games in Amsterdam. We are excited to see you
                there! More information about this meetup will follow.
              </p>
              <h1>About</h1>
              <p>
                We are Kenneth, Lian, Ryan and Tommy and we present to you the
                ABC First Edition Panda Hoodie! We did our best to create a
                beautiful hoodie! This is the first official merchandise of our
                club and we hope you like the design and the representation of
                our lovely culture. With this hoodie you can come to our
                physical events in the future and really feel part of the
                family. We hope you like it! For future merchandise we also
                welcome designs of our members! If you are interested please
                contact merchandise@asianborrelclub.nl
              </p>
            </div>
            <img
              className="hoodie-section-a-img"
              src={hoodieA}
              alt="a view of hoodie"
            ></img>
          </div>
          <div className="hoodie-section-b">
            <div className="hoodie-section-b-text">
              <h1>Process</h1>
              <p>
                When you pre-order our hoodie you will need to fill in the
                information in the form. After the pre-order time ends on the
                19th of june we will pack and get the product ready for you. It
                will arrive in 10 business days after the package is made ready.
                We will send an email when the product has been shipped. For any
                questions about the process you can contact us through our
                discord server https://discord.gg/eB3TSVPB or e-mail us at
                merchandise@asianborrelclub.nl.
              </p>
              <h1>Size</h1>
              <table>
                <tbody>
                  <tr>
                    <th></th>
                    <th>s</th>
                    <th>m</th>
                    <th>l</th>
                    <th>xl</th>
                  </tr>
                  <tr>
                    <td>length</td>
                    <td>68cm</td>
                    <td>71cm</td>
                    <td>73cm</td>
                    <td>73cm</td>
                  </tr>
                  <tr>
                    <td>body width</td>
                    <td>50cm</td>
                    <td>55cm</td>
                    <td>60cm</td>
                    <td>66cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <img
                className="hoodie-section-b-img"
                src={hoodieB}
                alt="b view of hoodie"
              ></img>
            </div>
          </div>
        </div>
        <div id="hoodie-preorder" className="hoodie-preorder">
          <h1>Pre-order ABC First Edition Panda Hoodie</h1>
          <div className="hoodie-form">
            <div className="form-product-img">
              <Carousel
                emulateTouch={true}
                infiniteLoop={true}
                dynamicHeight={true}
                showThumbs={false}
                autoPlay={false}
                showStatus={false}
              >
                <div>
                  <img src={hoodieFront} alt="front of hoodie" />
                </div>
                <div>
                  <img src={hoodieBack} alt="back of hoodie" />
                </div>
                <div>
                  <img src={hoodieA} alt="hoodie a" />
                </div>
                <div>
                  <img src={hoodieB} alt="hoodie b" />
                </div>
              </Carousel>
            </div>
            <div className="hoodie-form-information">
              <ProductForm />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductPageContent;
