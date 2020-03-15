import React from "react";


const Nav = props => {
  return (
    <nav className="navbar">
      <div className="cart"> {props.cartsItems} </div>
    </nav>
  );
};

export default Nav