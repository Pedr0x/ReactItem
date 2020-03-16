import React from "react";
import Helmet from "react-helmet";

import "./pedr0x.css";

import "./main.css";
import ShoppingSection from "./components/shoppingArea/shoppingArea";
import ShoppingData from "./components/shoppingData/shoppingData";
//import alert from "./alert";
import MainProductContainer from "./components/mainProduct/mainProduct";
import Footer from "./components/footer/footer"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import  products  from "./data.js";

///navbar with shopping cart
//main shopping area
//items
//total area

const Nav = props => {
  return (
    <nav className="navbar">
      <div className="cart-icon-container">
        {" "}
        <div className="cart">
	  <i class="material-icons">
shopping_cart
</i> {props.cartsItems} </div>
      </div>
    </nav>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ShoppedItems: [],
      customerHasBoughtYet: false,
      productsBought: 0,
      lastItemBought: {}
    };
    this.getProduct = this.getProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    //this.getState = this.getState.bind(this);
//	   this.getLastProductInfo = this.getLastProductInfo.bind(this);


  }

  getProduct(e) {
    let randomString = Math.random()
      .toString(36)
      .substr(2, 5);
    let { producttitle, productprice } = e.target.dataset;
    class BoughtProduct {
      constructor(productTitle, productPrice) {
        this.productTitle = productTitle;
        this.productPrice = productPrice;
        this.productID = randomString;
      }
      
    }

    let a = new BoughtProduct(producttitle, productprice);
    let {ShoppedItems,lastItemBought} = this.state;
    //let x = ShoppedItems.length;

    let lastProductBought = ShoppedItems[ShoppedItems.length - 1];

  
    this.setState(prevstate => ({
      customerHasBoughtYet: true,
      productsBought: prevstate.productsBought + 1,
      ShoppedItems: [...this.state.ShoppedItems, a]
     
    }
    
    
    ) );
    
    
    //console.log(this.state.lastItemBought.productTitle)
   // console.log(this.state.ShoppedItems)


  }

  
  deleteProduct(e) {
    let { itemid } = e.target.dataset;
    this.setState(prevstate => ({
      productsBought: prevstate.productsBought - 1,
      ShoppedItems: prevstate.ShoppedItems.filter(
        elem => elem.productID != itemid
      )
    }));
    if (this.state.ShoppedItems.length < 1) {
      this.setState(prevstate => ({
        customerHasBoughtYet: false
      }));
    }
  }



 
  render() {
  
    return (
		<>
		   <Helmet>
      <title>Pedr0x´s shop</title>
		  <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="pedr0xxxxx" />
    </Helmet>
		
      <div>
        <Nav cartsItems={this.state.productsBought} />
       
		<ShoppingSection function={this.getProduct} />
        
		<ShoppingData 
          function={this.deleteProduct}
          ShoppedItems={this.state.ShoppedItems}
          customerHasBoughtYet={this.state.customerHasBoughtYet}
			getLastProductInfo={this.getLastProductInfo}
        	/>

		<Footer/>
      </div>
		</>
    );
	  
  }
}
export default App;

//			<MainProductContainer
 //         customerHasBoughtYet={this.state.customerHasBoughtYet}
 //         price={this.state.lastItemBought.productPrice}
  //      />