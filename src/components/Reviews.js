import React, { Component } from 'react';
import Stars from './Stars'

class Reviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      proReview: this.props.proReview,
      conReview: this.props.conReview
    };

    this.props.proReview.datePosted = this.dateFormat(this.props.proReview.datePosted);
    this.props.conReview.datePosted = this.dateFormat(this.props.conReview.datePosted);

    this.dateFormat = this.dateFormat.bind(this);
  }

  // Because the date format isn't human readible, we'll make it formatted Month Name, Day, Year
  dateFormat(date) {
    var mnths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var d = new Date(date),
        mnth = (d.getMonth()+1),
        day  = ("0" + d.getDate()).slice(-2);
    return mnths[mnth-1] + " " + day + ", " + d.getFullYear();
  }

  render() {

    return (
      <div>
        <div><Stars option="5"/><span className="medium" data-testid="review-overall">overall</span>
        <span className="medium">view all 14 reviews</span></div>
        <p></p>
        <div className="grid-reviews">
          <div className="grid-review">
            <h2 className="medium">PRO</h2>
            <p className="medium">most helpful 4-5 star review</p>
            <Stars option={this.props.proReview.overallRating} />
            <h3 className="medium" data-testid="review-protitle">{this.props.proReview.title}</h3>
            <p className="medium" data-testid="review-proreview">{this.props.proReview.review}</p>
            <p className="medium" data-testid="review-proname">{this.props.proReview.screenName} {this.props.proReview.datePosted}</p>
          </div>
          <div className="grid-review">
            <h2 className="medium">CON</h2>
            <p className="medium">most helpful 1-2 star review</p>
            <Stars option={this.props.conReview.overallRating}/>
            <h3 className="medium" data-testid="review-contitle">{this.props.conReview.title}</h3>
            <p className="medium" data-testid="review-conreview">{this.props.conReview.review}</p>
            <p className="medium" data-testid="review-conname">{this.props.conReview.screenName} {this.props.conReview.datePosted}</p>
          </div>
          </div>
      </div>
    );
  };
}

export default Reviews;
