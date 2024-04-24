import { Component } from "react";

class Counter extends Component{

  constructor(props){
    super(props);
    this.state = {
      number: 1,
      random : 1
    };
  }

  render(){
    console.log("render() 호출됨....");
    let { number, random } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>{random}</h2>
        <button onClick={ event => { 
          this.setState(
            { 
              number : number + 1,
              random : Math.random(),
            }
          );
        } }>+</button>
      </div>
    );
  }
}
export default Counter;