import React, { Component } from 'react';

class Carousel extends Component {

  constructor(props) {
    super(props);
    // state
    var imagePrev = "";
    var imageNow = "";
    var imageNext = ""

    if (this.props.images != null) { // if we have more than 1 images
      if (this.props.images.length > 1) {
        imagePrev = this.props.images[this.props.images.length-1];
        imageNow = this.props.images[0];
        imageNext = this.props.images[1];
      }
      if (this.props.images.length > 0) { // if we only have 1 image
        imageNow = this.props.images[0];
      }
    }

    this.state = {
      show: 0,
      imagePrev: imagePrev,
      imageNow: imageNow,
      imageNext: imageNext,
      primary: imageNow
    };

    this.moveImages = this.moveImages.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
  };

  /* clickLeft decreases the position you are in the scrolling carousel
   *
   */
  clickLeft() {
    var index = 0;
    if (this.props.images != null && this.props.images.length > 0) {
      index = this.props.images.length-1;
    }
    // show will decrease
    if (this.state.show > 0) {
      index = this.state.show - 1;
    }
    this.moveImages(index);
  };

  /* clickRight increases the position you are in the scrolling carousel.
   *
   */
  clickRight() {
    var index = 0;
    // we have two situations, if the user has previously clicked an image or if the image is in the middle being showing
    if (this.props.images != null && this.props.images.length > 0) {
      if (this.state.show < this.props.images.length-1) {
        index = this.state.show + 1;
      }
    }
    this.moveImages(index);
  };

  /* moveImages will find the previous, current and next images to display on the page based
   * on if you pressed the left or right button.
   */
  moveImages(index) {
    var prev = index-1;
      if (this.props.images != null && this.props.images.length > 0) {
        if (prev < 0) {
          prev = this.props.images.length-1;
        }
    }
    var next = index+1;
    if (this.props.images != null && this.props.images.length > 0) {
      if (next > this.props.images.length-1) {
        next = 0;
      }
    }

    var imagePrev = this.props.images[prev];
    var imageNow = this.props.images[index];
    var imageNext = this.props.images[next];

    this.setState({
      show: index,
      imagePrev: imagePrev,
      imageNow: imageNow,
      imageNext: imageNext,
      primary: this.props.images[index]
    });
  }

  clickZoom() {
    console.log("clicked zoom");
    // TODO: enlarge the primary image
  };

  render() {
    return (
      <div>
        <img className="primary-image"
          src={this.state.primary.image}
          data-id={this.state.primary.key}
          data-testid="primary"
          alt="product" />
        <p></p>
        <div className="centered zoom">
          <span
            className="zoom-image"
            tabIndex="0"
            alt="zoom in"
            data-testid="zoomIn"
            onClick={this.clickZoom}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="medium">View Image</span>
        </div>
        <div className="grid-carousel">
          <div className="grid-image">
            <div
              className="carousel-back"
              onClick={this.clickLeft}
              data-testid="clickLeft"
              tabIndex="0" />
          </div>
        <div id="imagePrev" className="grid-image">
          <img
            className="primary-image not-selected-image"
            ref="imagePrev"
            data-id={this.state.imagePrev.key}
            data-testid="imagePrev"
            onClick={this.clickImage}
            src={this.state.imagePrev.image}
            alt="previous preview" />
        </div>
        <div id="imageNow" className="grid-image">
          <img
            className="primary-image selected-image"
            ref="imageNow"
            data-id={this.state.imageNow.key}
            data-testid="imageNow"
            onClick={this.clickImage}
            src={this.state.imageNow.image}
            alt="product preview" />
        </div>
        <div id="imageNext" className="grid-image">
          <img
            className="primary-image not-selected-image"
            ref="imageNext"
            data-id={this.state.imageNext.key}
            data-testid="imageNext"
            onClick={this.clickImage}
            src={this.state.imageNext.image}
            alt="next preview" />
        </div>
        <div className="grid-image">
          <div
            className="carousel-foward"
            onClick={this.clickRight}
            data-testid="clickRight"
            tabIndex="0" />
          </div>
        </div>
      </div>
    );
  };
}

export default Carousel;
