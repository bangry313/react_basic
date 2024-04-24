import Counter from "./componens/Counter";
import Header from "./componens/Header";
import "./style.css"

App.defaultProps = {
  name : "손님",
  age : 10
};

// 함수 기반 컴포넌트 정의
function App({name, age}) {
  // 서버에서 받은 이름
  // const name = props.name;
  // const age = props.age;
  // let {name, age} = props;

  let isMan = true;
  const div = (
    <>
      <Header />
      <div className="App">
        <h2>리액트 애플리케이션 화면입니다..</h2>
        <p>이름: {name}, 나이 : {age}</p>      
      </div>
      <form>
        <label htmlFor="name">이름</label><input name="name" id="name" />
      </form>
      
      {/* 분기 렌더링 */}
      <div>
        {
          isMan ? '남자' : '여자'
        }
      </div>
      <p>
        {
          isMan && '남자이구나'
        }
      </p>
      <p>
        {
          !isMan || '여자이구나'
        }
      </p>

      {/* state 이행를 위한 컴포넌트 */}
      <Counter />
    </>
  );
  console.log(div);

  return div;
}

export default App;
