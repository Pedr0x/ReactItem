import React from "react";
import "./mainProductStyles.css";

class MainProductImgContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-product-img-container">
        <img src={this.props.img} />
      </div>
    );
  }
}
class MainProductBanner extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-product-banner-container">
        <p className="main-product-banner-text">
          {" "}
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod 3334343 incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco{" "}
        </p>
      </div>
    );
  }
}

class MainProductTextContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-product-text-container">
        <h2 className="main-product-title"> {this.props.title} </h2>

        <h2 className="main-product-price"> {this.props.price} </h2>
        <p className="main-product-description">{this.props.description} 
        </p>
      </div>
    );
  }
}

class MainProductContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  
  ComponentDidUpdate(prevProps) {
    // Uso tipico (no olvides de comparar los props):
    console.log('222')
  }


  render() {
    if (this.props.customerHasBoughtYet == true) {
      return (
        <div className="main-product-container">
          <MainProductImgContainer img={this.props.img} />
          <MainProductTextContainer
            title={this.props.title}
            price={this.props.price}
            description={this.props.description}
          />

          <MainProductBanner />
        </div>
      );
    } else {
      return <h2> buy something first </h2>;
    }
  }
}

export default MainProductContainer;