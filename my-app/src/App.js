import React from "react";
import Main from "./Main.css";


var Inputs = props => {
  return (
    <div className="inputs-container">
      <input className="input" id="input-name" />
      <input className="input" id="input-age" />
      <input className="input" id="input-occupation" />
    </div>
  );
};

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      occupation: ""
    };

    this.getRandomStringName = this.getRandomStringName.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);

    this.getRandomStringOccupation = this.getRandomStringOccupation.bind(this);
  }

  /* static defaultProps = {
      name: Math.random().toString(36).substr(2, 5),
      occupation: Math.random().toString(36).substr(2, 5),
    age:Math.floor(Math.random()*90)

  } */

  getRandomStringName() {
    let randomString = Math.random()
      .toString(36)
      .substr(2, 5);
    this.setState({ name: randomString });
  }

  getRandomStringOccupation() {
    let randomString = Math.random()
      .toString(36)
      .substr(2, 5);
    this.setState({ occupation: randomString });
  }

  getRandomInt() {
    let randomInt = Math.floor(Math.random() * 90);
    this.setState({ age: randomInt });
  }
  componentDidMount() {
    console.log("Card mounted");
    this.getRandomInt();
    this.getRandomStringOccupation();
    this.getRandomStringName();
  }

  render() {
    return (
      <div className="card-item">
        <h1 className="card-name">{this.state.name} </h1>
        <h2 className="card-occupation">{this.state.occupation} </h2>
        <h2 className="card-age">{this.state.age} </h2>
      </div>
    );
  }
}

class GetCard extends React.Component {
  constructor() {
    super();
    this.state = {
      needsCard: false,
      cardCount: 1
    };
    this.getCard = this.getCard.bind(this);
  }

  getCard() {
    this.setState({ needsCard: true });
    this.setState(prevstate => ({ cardCount: prevstate.cardCount + 1 }));
    console.log(this.state.cardCount);
  }
  render() {
    if (this.state.needsCard === false) {
      return (
        <React.Fragment>
          <button onClick={this.getCard}> Get another Card</button>
          <Card />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <button onClick={this.getCard}> Get another Card</button>

          <Card />
          <Card />

          <Card />
        </React.Fragment>
      );
    }
  }
}



class MainContainer extends React.Component {
	 constructor() {
    super();
    this.state = {
      arr:  [
		
		{
			name:"",
			text:"",
			img:"",
			id:""
		} ]
		
    };
    this.getRandomString = this.getRandomString.bind(this);
  }
	
	

	
	getRandomString() {
		return  Math.random()
      .toString(36)
      .substr(2, 5);
	}
	
		getRandomText() {
		return  Math.random()
      .toString(36)
      .substr(20, 140);
	}
	
	
	render(){
		var randomPic = "https://picsum.photos/200/300";
		var randomString = Math.random()
      .toString(36)
      .substr(2, 5);

		return (
		
		<div className="main-container"> 
		
		<CardItem name={randomString} text={randomString} />
		
		</div>
		)
			
	}
		
	
	
	
}

var CardItem = (props) => {
	
	return(
	<div className="card-container">
		<div className="card-img-container"> </div>
		<h1 className="card-user"> {props.name}</h1>
				<p className="card-text"> {props.text}</p>

		</div>
	)
	
}


export default function App() {
  return (
    <div className="App">
	  <MainContainer/>
  //    <h1>Get random Cards</h1>
     // <GetCard />
    </div>
  );
}



