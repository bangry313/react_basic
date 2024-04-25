const { Component } = require("react");
const { default: LifecycleDemoComponent } = require("./componens/LifecycleDemoComponent");

const getRandomColor = function(){
  return `${Math.floor(Math.random()*17775215).toString(16)}`;
}

class LifecycleApp extends Component {
  state = {
    color : '#000000',
    background : {background : '#000000'}
  };

  handleClick = (event)=> {
    this.setState({
      color : getRandomColor()
    });
    console.log(this.state.color);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <LifecycleDemoComponent color={this.state.color}/>
      </div>

    );
  }
}

export default LifecycleApp;