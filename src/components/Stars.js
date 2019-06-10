import React, { Component } from 'react';

class Stars extends Component {

  render() {
    // grab from the Reviews options how many stars out of five there are
    // add the red/gray stars in an array
    var stars = [];
    for (var r = 0; r < this.props.option; r++) {
      stars.push("redStar");
    }
    for (var g = 0; g < 5-this.props.option; g++) {
      stars.push("grayStar");
    }

    // then print out the array out of five to the page
    return (
      <span
        className="reviewStars"
        data-id={this.props.option}
        data-testid="stars-numbers">
        <span className={stars[0]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className={stars[1]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className={stars[2]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className={stars[3]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className={stars[4]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </span>
    );
  };
}

export default Stars;
