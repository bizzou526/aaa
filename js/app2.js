var app = new Vue({
  el:'#app',
  data: {
    message: 'Hello Vue.js',
    message2: 'Bye Vue.js',

    uid:'12',
    flag: true,
    /*flag: false*/
  },
  methods: {
    clickBtn(){
      console.log("hi");
    },
    clickBtn2(){
      console.log("Bye");
    }
  }
});