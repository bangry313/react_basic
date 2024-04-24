import { Component } from "react";

// 클래스 기반 컴포넌트 정의
class ClassApp extends Component {
  //props;

  // 디폴트 props 설정
  static defaultProps = {
    name : "손님"
  };
  
  // 메서드 오버라이딩
  render(){
    const name = this.props.name;
    return (
      <div>
        <h2>{name}</h2>
        <ul>
          <li>강우진</li>
          <li>김희주</li>
          <li>김찬규</li>
        </ul>
      </div>
    );
  }
}

export default ClassApp;