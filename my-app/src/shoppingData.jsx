import React from "react";

class ShoppingData extends React.Component {
  constructor(props) {
    super();
  }
  render(props) {
    var priceList = [];
    var z = this.props.ShoppedItems.map(elem => priceList.push(elem.price));

    priceList = priceList.reduce((a, b) => a + b);

    if (this.props != null) {
      return (
        <div className="shopping-data-container">
          <h3 class="data-subtitle">You have bought:</h3>

          <h3 class="data-subtitle">Your total price is {priceList} $</h3>
        </div>
      );
    } else {
      return <h1> Please buy </h1>;
    }
  }
}

export default ShoppingData;
