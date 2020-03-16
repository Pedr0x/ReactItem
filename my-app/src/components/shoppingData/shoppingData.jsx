import React from "react";

var ProductsBoughtList = props => {
  return (
    <div className="bought-products-item">
      <h3 className="bought-products-item-price"> {props.itemPrice} </h3>
      <h3 className="bought-products-item-title"> {props.itemTitle} </h3>
      <div className="delete-button-container">
        <button
          onClick={props.function}
          className="delete-product-button"
          data-itemid={props.productID}
          data-xx={"es un button"}
        >
          Delete product{" "}
        </button>
      </div>
          </div>

  );
};
class ShoppingData extends React.Component {
  constructor(props) {
    super();
  }

  render(props) {
    let { customerHasBoughtYet, ShoppedItems } = this.props;
    if (customerHasBoughtYet === true) {
      let priceList = [];
      let z = ShoppedItems.map(elem =>
        priceList.push(parseInt(elem.productPrice))
      );
	
		
		//	console.log( Object.values(ShoppedItems[ShoppedItems.length - 1] ) );
		//	console.log((ShoppedItems[ShoppedItems.length - 1]) );
		//this.props.getLastProductInfo( (ShoppedItems[ShoppedItems.length - 1]))
      
		priceList = priceList.reduce((a, b) => a + b);

      let ProductsBoughtListComp = ShoppedItems.map(elem => (
        <ProductsBoughtList
          itemPrice={elem.productTitle}
          itemTitle={elem.productPrice}
          productID={elem.productID}
          function={this.props.function}
        />
      ));
		
	
     // console.log(ShoppedItems.map(elem => elem.productTitle));

      return (
        <div  className="shopping-data-container">
          <div className="data-bought-products-container">
            <h2 className="bought-products-subtitle"> You have bought: </h2> 

            {ProductsBoughtListComp}
          </div>
          <h3 className="data-subtitle">Your total price is {priceList} $</h3>
        </div>
      );
    } else {
      return <h1> You havent bought anything yet </h1>;
    }
  }
}

export default ShoppingData;
