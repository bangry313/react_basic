const { Component } = require("react");

class LifecycleDemoComponent extends Component {

  state = {
    number : 0,
    color : null,
  };
  
  constructor(props){
    super(props);
    console.log("constructor() 실행됨...");
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log("getDerivedStateFromProps() 호출됨");
    if(nextProps.color !== prevState.color){
      return {color : nextProps.color};
    }
    return null;
  }

  componentDidMount(){
    console.log("componentDidMount() 호출됨");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate(nextProps, nextState) 호출됨");
    // return false;
    return (nextState.number % 10) !== 4; 
  }

  componentWillUnmount(){
    console.log("componentWillUnmount() 호출됨");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate(prevProps, prevState) 호출됨");
    return prevState.color;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("componentDidUpdate(prevProps, prevState, snapshot) 호출됨", prevProps,prevState);
    if(snapshot){
      console.log("업데이트 이전의 색상 : ", snapshot);
    }
  }

  // 더하기 버튼 이벤트 처리
  handleClick = (event) =>{
    this.setState({
      number : this.state.number + 1
    });
  }

  render(){
    console.log("render() 호출됨...");
    const style = {
      color : `#${this.props.color}`
    };
    return (
      <div style={{borer: '1px solid red'}}>
        <h1 style={style}>{this.state.number}</h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifecycleDemoComponent;