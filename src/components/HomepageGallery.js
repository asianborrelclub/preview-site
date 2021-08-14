import React, { Component } from "react";
import "./HomepageGallery.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import gallery1 from "../img/gallery/1.jpg";
import gallery2 from "../img/gallery/2.jpg";
import gallery3 from "../img/gallery/3.jpg";
import gallery4 from "../img/gallery/4.jpg";
import gallery5 from "../img/gallery/5.jpg";
import gallery6 from "../img/gallery/6.jpeg";
import gallery7 from "../img/gallery/7.JPG";
import gallery8 from "../img/gallery/8.jpeg";
import gallery9 from "../img/gallery/9.jpeg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
];

class HomepageGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className="gallery-page">
        <h1>ABC Media</h1>
        <div className="gallery-grid">
          <div
            className="card card-wide"
            style={{ backgroundImage: `url(${gallery1})` }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
          ></div>
          <div
            className="card card-wide"
            style={{ backgroundImage: `url(${gallery2})` }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
          ></div>
          <div
            className="card card-tall"
            style={{ backgroundImage: `url(${gallery3})` }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
          ></div>
          <div
            className="card card-tall"
            style={{ backgroundImage: `url(${gallery4})` }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
          ></div>

          <div
            className="card card-tall"
            style={{ backgroundImage: `url(${gallery5})` }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
          ></div>
          <div
            className="card card-wide"
            style={{ backgroundImage: `url(${gallery6})` }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
          ></div>
          <div
            className="card card-wide"
            style={{ backgroundImage: `url(${gallery7})` }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
          ></div>
          <div
            className="card card-tall"
            style={{ backgroundImage: `url(${gallery8})` }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}
          ></div>
          <div
            className="card card-tall"
            style={{ backgroundImage: `url(${gallery9})` }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}
          ></div>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default HomepageGallery;
