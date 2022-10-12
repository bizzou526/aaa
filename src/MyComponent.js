import React from 'react';

const MyComponent = props =>{ // 화살표 있으면 함수형 컴포넌트로 생각해두면 됌.
  return(
  <div>
    안녕하세요, 제이름은 {props.name}입니다.<br/>
    children 값은 {props.children} 입니다.
  </div>
  );
};

MyComponent.defaultProps = {
  name:'기본이름'
};

export default MyComponent; //export 해야 다른파일에서 MyComponent를 사용할 수 있음.