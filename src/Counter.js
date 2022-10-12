import React, {Component} from "react";

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      number : 0,
      fixedNumber : 0
    };
  }
  /*render(){
    const {number, fixedNumber} = this.state;
    return(
      <div>
        <h1>{number}</h1>
        <h1>바뀌지 않는 값 : {fixedNumber}</h1>
        <button onClick={()=>{
          this.setState(prevState => ({      // return 있음.
            number : prevState.number + 1                        
          }));
          this.setState(prevState => ({
            number : prevState.number + 1
          }));
        }}>+1 추가하기</button>
      </div>
    );
  }*/

  render(){
    const {number, fixedNumber} = this.state;
    return(
      <div>
        <h1>{number}</h1>
        <h1>바뀌지 않는 값 : {fixedNumber}</h1>
        <button onClick={()=>{
          this.setState(
            {
              number : number +1
            },
            () => {
              console.log("방금 setState가 호출 되었습니다.");
              console.log(this.state);
            }
          );
        }}>+1 추가하기</button>
      </div>
    );
  }
}
export default Counter;