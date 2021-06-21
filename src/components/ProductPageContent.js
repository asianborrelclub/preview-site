import React, { Component } from "react";
import "./ProductPageContent.scss";
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
              <h1 className="title">ABC’s First Edition: Panda Hoodie</h1>
              <span className="pricetag sale">€40,00</span>
              <br />
              <span className="pricetag">€34,99</span>
              <br />
              <div className="undertitle">
                <div>
                  To celebrate our first year, we designed the Panda hoodie.
                  It’s made for your comfort.
                </div>
                <div>
                  Because we want to thank you for your support this hoodie is
                  now on SALE from €40,00 for only €34,99!
                </div>
              </div>

              <h2>Details</h2>
              <div className="details">
                <div>Material: 50% Cotton 50% polyester </div>
                <div>Weight: 270 g/m²</div>
                <div>Model: Unisex</div>
                <div>Fabric color: Black</div>
              </div>

              <h2 className="astriks">*PRE-ORDER PERIOD ENDED</h2>
              <div className="hoodie-cta">
                <a href="#hoodie-more-info">
                  <button className="btn-info">More info</button>
                </a>
              </div>
            </div>
          </div>
          <div id="hoodie-more-info" className="hoodie-section-a">
            <div className="hoodie-section-a-text">
              <h1>About</h1>
              <p>
                This design is the first edition of our limited Panda hoodie. On
                the front of the hoodie is the well-known ABC Logo and on the
                back we have a design made in-house, inspired by Asian culture.
                The ring of connected bamboo sticks reflects ABC’s warm and
                welcoming feeling. The panda represents the members, looking at
                the countless opportunities in life (in the form of a mountain).
              </p>
              <h1> Hoodie meetup in Amsterdam</h1>
              <p>
                To pick up your hoodie, you can come to the Hoodie meetup event
                on the 10th of July! During the hoodie meetup you will have the
                chance to meet other ABC members. At this event we will have a
                drink together and play some games. However, if you can’t attend
                the event, you can also choose the option for delivery at home.
              </p>{" "}
              <h1>Process</h1>
              <p>
                This is a limited-edition hoodie, which means that after the
                19th of June the First Edition Panda hoodie can’t be ordered
                anymore. Shipping will take 10-14 business days. We will send
                you an email when the product has been shipped. For any
                questions about the process you can contact us through social
                media or e-mail{" "}
                <a href="mailto:merchandise@asianborrelclub.nl">
                  merchandise@asianborrelclub.nl
                </a>
                .
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
              <h1>Designs</h1>
              <p>
                This is the first official merchandise of ABC and we hope you
                like the design and the representation of our lovely community.
                With this hoodie you can come to our physical events and feel
                part of the family. For future merchandise we also welcome
                designs of our members! If you are interested please contact{" "}
                <a href="mailto:merchandise@asianborrelclub.nl">
                  merchandise@asianborrelclub.nl
                </a>
                .
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
              <h1>Refund Policy</h1>
              <p>
                For our refund policy, please{" "}
                <a target="_blank" href="/refund-policy">
                  click here
                </a>
                .
              </p>
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
          <h1>Pre-order ABC's First Edition Panda Hoodie</h1>
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
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductPageContent;
