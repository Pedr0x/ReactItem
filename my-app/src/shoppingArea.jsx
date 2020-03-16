import React from "react";

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
  //let aa = {props.itemName}
  return (
    <div className="shopping-item">
      <div className="shopping-item-img-container">
        <img src={props.imgSrc} />
      </div>
      
      <div className="shopping-item-text">
        <h2 className="shopping-item-product-title"> {props.itemName}</h2>
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
  return <div className="main-shopping-container">{ShopComponents}</div>;
};

export default ShoppingSection;
