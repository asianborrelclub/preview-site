import React, { Component } from "react";
import "./HomepageGallery.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "https://drive.google.com/uc?export=view&id=1tQNfGRcsmyxj_CaEjX4tZ7_-VvDo0DOY",
  "https://drive.google.com/uc?export=view&id=1NlOeL9qLzWXxHv_Hf43bVE6KZRWu7xAS",
  "https://drive.google.com/uc?export=view&id=1uIyrYdqlT44mBmKNv-NRaRj1i2eCOuVD",
  "https://drive.google.com/uc?export=view&id=1bGo4NmD677SgIhBId333DotI6X4JsH8O",
  "https://drive.google.com/uc?export=view&id=1moMehgeIq4oCdXYF_5alXNsN9kGmanCd",
  "https://drive.google.com/uc?export=view&id=1rsyMxtaJ0v8FwQnW6RJYH_hbbpp3VBT4",
  "https://drive.google.com/uc?export=view&id=1BB5zv5nSj0GkX5Bv3g0jhBsCzKkNBHTW",
  "https://drive.google.com/uc?export=view&id=1ysdzxBpINaZtLVW5IBGhK5HUuXBjAs5m",
  "https://drive.google.com/uc?export=view&id=1VOEmfPZUJ9pQj2BIGGAnRFJThIlAhJ3m",
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
            style={{
              backgroundImage:
                "url(https://drive.google.com/uc?export=view&id=1tQNfGRcsmyxj_CaEjX4tZ7_-VvDo0DOY)",
            }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
          ></div>
          <div
            className="card card-wide"
            style={{
              backgroundImage:
                "url(https://drive.google.com/uc?export=view&id=1NlOeL9qLzWXxHv_Hf43bVE6KZRWu7xAS)",
            }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
          ></div>
          <div
            className="card card-tall"
            style={{
              backgroundImage:
                "url(https://drive.google.com/uc?export=view&id=1uIyrYdqlT44mBmKNv-NRaRj1i2eCOuVD)",
            }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
          ></div>
          <div
            className="card card-tall"
            style={{
              backgroundImage:
                "url(https://drive.google.com/uc?export=view&id=1bGo4NmD677SgIhBId333DotI6X4JsH8O)",
            }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
          ></div>

          <div
            className="card card-tall"
            style={{
              backgroundImage:
                "url(https://drive.google.com/uc?export=view&id=1moMehgeIq4oCdXYF_5alXNsN9kGmanCd)",
            }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
          ></div>
          <div
            className="card card-wide"
            style={{
              backgroundImage:
                "url(https://drive.google.com/uc?export=view&id=1rsyMxtaJ0v8FwQnW6RJYH_hbbpp3VBT4)",
            }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
          ></div>
          <div
            className="card card-wide"
            style={{
              backgroundImage:
                "url(https://drive.google.com/uc?export=view&id=1BB5zv5nSj0GkX5Bv3g0jhBsCzKkNBHTW)",
            }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
          ></div>
          <div
            className="card card-tall"
            style={{
              backgroundImage:
                "url(https://drive.google.com/uc?export=view&id=1ysdzxBpINaZtLVW5IBGhK5HUuXBjAs5m)",
            }}
            onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}
          ></div>
          <div
            className="card card-tall"
            style={{
              backgroundImage:
                "url(https://drive.google.com/uc?export=view&id=1VOEmfPZUJ9pQj2BIGGAnRFJThIlAhJ3m)",
            }}
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
