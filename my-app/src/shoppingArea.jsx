import React from "react";
import "./main.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainProductContainer from "./mainProduct";

var Exam = () => {
	return(
	<div className="big"> 
	
	
	</div>)
}

var products = [
  {
    itemName: "Some stuff1",
    itemPrice: "111",
    itemText:
      ' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
    imgSrc: "https://picsum.photos/200"
  },
  {
    itemName: "Some stuff2",
    itemPrice: "222",
    itemText:
      ' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
    imgSrc: "https://picsum.photos/200"
  },
  {
    itemName: "Some stuff3",
    itemPrice: "33",
    itemText:
      ' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
    imgSrc: "https://picsum.photos/200"
  },
  {
    itemName: "Some stuff44",
    itemPrice: "44",
    itemText:
      ' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
    imgSrc: "https://picsum.photos/200"
  }
];


const ShoppingItem = props => {
  var myValue = 33;
	var joinedString = props.itemName.split(" ").join("");
  //let aa = {props.itemName}
  return (
    <div className="shopping-item">
      <div className="shopping-item-img-container">
        <img src={props.imgSrc} />
      </div>
      
      <div className="shopping-item-text">
        <Link to={`/${joinedString}`} className="shopping-item-product-title"> {props.itemName}</Link>
        <h2 className="shopping-item-product-price"> {props.itemPrice} $</h2>

		  {/* <p> {props.itemText} </p> */}
       
           <button
          className={"buy-button"}
          data-myattr={myValue}
          data-productprice={props.itemPrice}
          data-producttitle={props.itemName}
          onClick={props.function}
        >
          {" "}
          Get Item{" "}
        </button>
      </div>
    </div>
  );
};

ShoppingItem.defaultProps = {
  itemName: "Item name is undefined",
  itemText:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  imgSrc: "https://picsum.photos/200",
  itemPrice: 333
};


var Alert = props => {
  return (
    <div className="alert-container">
      <h2>You have just bought {props.itemTitle} ! </h2>
    </div>
  );
};



var ShoppingSection = props => {
  const ShopComponents = products.map(item => (
    <ShoppingItem
      itemName={item.itemName}
      itemPrice={item.itemPrice}
      itemText={item.itemText}
      imgSrc={item.imgSrc}
      function={props.function}
    />
  ));

	var ShoppingRoutes  = products.map(item => 
	
	
	<Route
          path={`/${ item.itemName.split(" ").join("")}`}
          render={(props) => <MainProductContainer price={item.itemPrice} description={item.itemText} title={item.itemName} img={item.imgSrc} />} >
          
		</Route>
									  )

  return (
<div className="main-shopping-container">
  <Router>
  	 {ShopComponents}
  
  	 	 <Switch>
  	 {ShoppingRoutes}
	  </Switch> 
  </Router> 
  <Alert/>
  </div>
)
		}

export default ShoppingSection;
