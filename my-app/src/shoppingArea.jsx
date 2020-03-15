import React from "react";


const ShoppingButton = () => {
  return <button> Get Item </button>;
};

const ShoppingItem = props => {
  return (
    <div className="shopping-item">
      <div className="shopping-item-img-container">
        <img src={props.imgSrc} />'
      </div>
      <h2> {props.product.itemName}</h2>
      <h2> {props.product.itemPrice} $</h2>

      <p> {props.product.itemText} </p>
      <ShoppingButton />
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

class ShoppingSection extends React.Component {
  render() {
    var RenderedItems = products.map(elem => (
      <ShoppingItem
        itemName={elem.itemName}
        itemPrice={elem.itemPrice}
        itemText={elem.itemText}
      />
    ));

    return (
      <div className="main-shopping-container">
        <RenderedItems />
      </div>
    );
  }
}
export default ShoppingSection