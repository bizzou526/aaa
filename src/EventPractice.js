import React, {useState} from "react";

const EventPractice =()=> {
const [message, setMessage] = useState("");

const onChangeMessage = e => setMessage(e.target.value);
const onClick =()=> {
  alert(message);
  setMessage("");
}
const onKeyPress = e =>{
  if (e.key === "Enter" ){ // Enter 키를 누르면 handleClick 메서드가 실행됌.
    onClick();
  }
}

/*  render (){
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input type="text" name="message" placeholder="아무거나 입력하세요" value={this.state.message}
        onChange={(e) => {
          this.setState({
            message : e.target.value
          });
        }} />
        <button onClick ={
          () => {
            alert(this.state.message);
            this.setState({
              message : ""
            });
          }
        }>확인</button>
      </div>
    );
  }*/

  
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="message" placeholder="아무거나 입력하세요" value={message}
      onChange={onChangeMessage}
      onKeyPress={onKeyPress}/>
      <button onClick ={onClick}>확인</button>
    </div>
  );
}


export default EventPractice;