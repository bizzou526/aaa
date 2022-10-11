console.log('HEROPY');


const myName ="Hong Gil Dong";
const email = 'hong@korea.com';
const hello = `hello ${myName}?!`;

console.log(myName);
console.log(email);
console.log(hello);
console.log(myName + ',' + email + hello + 100);

const user={
  name: "hong",
  age: 85,
  isVaild: true,
  email: "hong@korea.com",
  add: "Seoul"
};

console.log(user.name);
console.log(user.age);
console.log(user.isVaild);
console.log(user.email);
console.log(user.add);

const fruits = ['apple', 'Banana', 'Cherry'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

/*function sum(a, b){
  return a+b;
}
const a = sum(10, 20);
console.log(a);*/



//2문제
/*let ck = check(30, 20);

function check(a, b){
  if( a < b ){
    d = "작다";
  }if( a == b ){
    d = "같다";
  }else{
    d = "크다";
  }
  return d;
}
document.write("a가 "+ck);*/

/*let count=0;
function handler(){
  count++;
  console.log("Clicked!"+count);
}

document.addEventListener('click', handler);

handler();
handler();*/


/*var ppp = prompt("점수 몇 점입니까?","90");

var qqq= grade(ppp);

function grade(point){
if(point>=90){
  str = "수";
}else if(point >= 80){
  str = "우";
}else if(point >= 70){
  str = "미";
}else if(point >= 60){
  str = "양";
}else{
  str = "가";
}
return str;
}
document.write(qqq+"("+ppp+")점");*/





/*const boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function() {
  console.log('문자를 눌렀습니다.');
  window.alert("안녕하세요.");
  boxEl.classList.add('active'); // div.box 요소 클릭했을때 요소에 active라는 클래스 추가(add) 됌

  let hasActive = boxEl.classList.contains('active');
  console.log('active=', hasActive);

  boxEl.classList.remove('active');
  hasActive = boxEl.classList.contains('active');
  console.log(hasActive);
});*/

const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function (boxEl, index){
  console.log(boxEl, index);
});