import React from "react";
import Main from "./Main.css";
import {data} from "./data.js";
import Nav from "./navbar.jsx";
import ShoppingSection from "./shoppingArea.jsx";
import shoppingData from "./shoppingData.jsx";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ShoppedItems: [
        { itemName: "ddd", price: 33 },
        { itemName: "ddd", price: 33 }
      ]
    };
  }

  render() {
    return (
      <div>
        <Nav cartsItems={2} />
        <ShoppingSection />
        <ShoppingData ShoppedItems={this.state.ShoppedItems} />
      </div>
    );
  }
}
export default App;



