import React, { Component } from 'react';
import Carousel from './components/Carousel'
import Reviews from './components/Reviews'
import Quantity from './components/Quantity'
import Highlights from './components/Highlights'
import './css/App.css';

class App extends Component {

 constructor(props) {
   super(props);
   // state
   this.state = {
     isLoading: true,
     title: '',
     images: null,
     price: '',
     online: false,
     instore: false,
     quantity: 1
   }
 }

/*
 * Below are onClick actions for each button or interactable object on the page.
 */
 clickPickUp() {
   // TODO: Implement clicking the pick up button
   console.log("TODO: clicked pick up");
 };

 clickAddToCart() {
   // TODO: Implement clicking the add to cart button
   console.log("TODO: clicked add to cart");
 };

 clickAddToRegistry() {
   // TODO: Implement clicking add to registry button
   console.log("TODO: clicked add to registry");
 };

 clickAddToList() {
   // TODO: Implement clicking add to list button
   console.log("TODO: clicked add to list");
 };

 clickShare() {
   // TODO: Implement clicking the share button
   console.log("TODO: clicked share");
 };

 clickZoomIn() {
   // TODO: Implement clicking the zoom in button
   console.log("TODO: clicked zoom in");
 };

 /* componentDidMount
  * Called after this entire component is mounted and load & parse json data at that point.
  */
 componentDidMount() {
   // load json from file
   this.setState({ isLoading: true });

   var title = "";
   var images = [];
   var price = "";
   var proReview = {};
   var conReview = {};

   const json = require('./item-data.json');
    if (json != null) {
      var myItem = json.CatalogEntryView;

      // check to see if the item exists
      if (myItem.length > 0) {
        // set object into state
        //this.state.itemDetails = myItem[0];

        // parse through title information
        if (myItem[0].title != null) {
          title = myItem[0].title;
        }
        else {
          console.warn("There was no title for this product");
        }

        // parse through image information
        if (myItem[0].Images.length > 0) {
          var myImages = myItem[0].Images;
          if (myImages.length > 0) {
            //var imageCount = myImages[0].imageCount; // don't need
            var primary = myImages[0].PrimaryImage[0].image;
            var first = {
              key: 0,
              image: primary
            };
            images.push(first);

            var altImages = myImages[0].AlternateImages;
            for (var i = 0; i < altImages.length; i++) {
              // this is the assumption we have at least 2 pictures or more.
              // If you only had one, what is the point of a carousel?
              var other = {
                key: i+1,
                image: altImages[i].image
              };
              images.push(other);
            }
          }
          else {
            console.warn("there are no images for this product");
          }
        }
        else {
          console.warn("there are no images for this product");
        }

        // parse through price information
        var priceOffers = myItem[0].Offers;
        if (priceOffers.length > 0) {
          var offers = priceOffers[0];
          if (offers.OfferPrice.length > 0) {
              var dollarPrice = offers.OfferPrice[0];
              price = dollarPrice.formattedPriceValue;
          }
          else {
            console.warn("There was no price for this product");
          }
        }
        else {
          console.warn("There was no price for this product");
        }

        // these are hilarious because I'm assuming that
        // 0 = available both online and instore,
        // 1 = online,
        // 2 = instore
        // enums will never die.

        // parse through available online
        var online = (myItem[0].purchasingChannelCode === 0 || 1) ? true : false;
        // parse through available instore
        var instore = (myItem[0].purchasingChannelCode === 0 || 2) ? true : false;

        if (myItem[0].CustomerReview.length > 0) {
          var reviews = myItem[0].CustomerReview[0];
          if (reviews.Pro.length > 0) {
            proReview = reviews.Pro[0];
          }
          if (reviews.Con.length > 0) {
            conReview = reviews.Con[0];
          }
        }
        else {
          console.log("There was no reviews for this product");
        }


        // You could add the rest of the information from the json here to be parsed,
        // such as the reviews, product highlights, promotions, etc

        // When we're done with the parsing, we know we'll loaded up the information
        // we need to display on the product page.
        this.setState({
          isLoading: false,
          title: title,
          images: images,
          price: price,
          online: online,
          instore: instore,
          proReview: proReview,
          conReview: conReview
        });
      }
      else {
        console.warn("There is no item in the json to look up or the json formatting has changed.");
      }
    }
  };

  render() {
    // render may be called before json is done loading, if that is the case,
    // wait until the isLoading is true, isLoading will be set to true when done.
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }

    // small little find in store didn't appear on mobile, just desktop
    var findInStore = "find in a store";
    const isMobile = window.innerWidth <= 768;
    if (isMobile) findInStore = "";

    return (
      <div className="content">
        <div className="grid-container">
          <div className="grid-item">
            <div className="text-item-name centered" data-testid="item-title">{this.state.title}</div>
            <Carousel images={this.state.images}/>
            </div>
            <div className="grid-item">
            <div><span className="text-item-price" data-testid="item-price">{this.state.price}</span> <span className="small">online price</span></div>
            <hr />
            <div className="announce-image"><span className="small announce" data-testid="item-ship">spend $50, ship FREE</span></div>
            <div className="announce-image"><span className="small announce" data-testid="item-gift">$25 gift card with purchase of a select Ninja Blender</span></div>
            <hr />
            <Quantity quantity={this.state.quantity} />
            <div className="grid-buttons">
              <div className="grid-button">
                <button data-testid="item-instore" disabled={!this.state.instore} onClick={this.clickPickUp} className="targetLargeButton pickUpButton">Pick Up In Store</button>
                <div className="small centered findInStore">{findInStore}</div>
                </div>
                <div className="grid-button">
                <button data-testid="item-online" disabled={!this.state.online} onClick={this.clickAddToCart} className="targetLargeButton addToCartButton">Add to Cart</button>
                </div>
            </div>
            <div className="grid-returns">
              <div className="grid-return">
                <div className="large">returns</div>
              </div>
              <div className="grid-return">
                <div className="small hr-vert return-desc" data-testid="item-return">The item must be returned within 30 days of the ship date. See return policy for details. Price, promotions, styles and availiblity may vary by store and online.</div>
              </div>
            </div>
            <div className="grid-3buttons">
              <div className="grid-3button">
                <button name="addToRegistryButton" onClick={this.clickAddToRegistry} className="targetSmallButton addToRegistryButton">Add To Registry</button>
              </div>
              <div className="grid-3button">
                <button name="addToListButton" onClick={this.clickAddToList} className="targetSmallButton addToListButton">Add To List</button>
              </div>
              <div className="grid-3button">
                <button name="shareButton" onClick={this.clickShare} className="targetSmallButton shareButton">Share</button>
              </div>
            </div>
            <Highlights />
          </div>
          <div className="grid-item">
            <Reviews proReview={this.state.proReview} conReview={this.state.conReview} />
          </div>
          <div className="grid-item">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
