import { useState } from "react";

const EventPractice = () => {

  const [message, setMessage] = useState("");

  const [name, setName] = useState("");

  const handleInputChange = function(event){
    setMessage(event.target.value);
  }

  const handleInputName = function(event){
    if(event.key == 'Enter'){
      setName("");
    }
    //setMessage(event.target.value);
  }

  return (
    <div>
      <h1>이벤트 처리 연습 화면입니다..</h1>
      <input type="text" name="message" placeholder="메시지를 입력하셔.." 
         onChange={handleInputChange}
      />
      
      <input type="text" name="name" placeholder="이름 입력하숑..." 
         onKeyPress={handleInputName} value={name}
         onChange={(event) => {setName(event.target.value)}} />

      <p>{message}</p>
    </div>
  );
}
export default EventPractice;