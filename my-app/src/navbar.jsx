import React from "react";


const Nav = props => {
	
	
	componentDidUpdate(prevProps) {
 //Typical usage, don't forget to compare the props
 if (this.props.cartsItems !== prevProps.cartsItems) {
	 console.log("ddd")
 }
		
}
	
  return (
    <nav className="navbar">
      <div className="cart"> {props.cartsItems} </div>
    </nav>
  );
};


export default Nav