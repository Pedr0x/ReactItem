import React from "react";
import "./main.css";
import ShoppingSection from "./shoppingArea";
import ShoppingData from "./shoppingData";
import alert from "./alert";
import MainProductContainer from "./mainProduct";
import Footer from "./footer"
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
        <div className="cart"> {props.cartsItems} </div>{" "}
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
	   this.getLastProductInfo = this.getLastProductInfo.bind(this);


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
    
    
    ) , (() => {lastItemBought: ShoppedItems[ShoppedItems.length - 1] } ));
    
    
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

	getLastProductInfo(elem){
		this.setState({lastItemBought:elem});
		
		console.log("worked")
	}
 
  render() {
    
    
	  
	  
	  
	  
	  
	  
	  
	  

  
    return (
      <div>
        <Nav cartsItems={this.state.productsBought} />
       
		<ShoppingSection function={this.getProduct} />
        
		<ShoppingData 
          function={this.deleteProduct}
          ShoppedItems={this.state.ShoppedItems}
          customerHasBoughtYet={this.state.customerHasBoughtYet}
		getLastProductInfo={this.getLastProductInfo}
        />

        <MainProductContainer
          customerHasBoughtYet={this.state.customerHasBoughtYet}
          price={this.state.lastItemBought.productPrice}
        />
		<Footer/>
      </div>
    );
  }
}
export default App;