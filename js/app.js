/*var cmp = {
	template: '<p>This is another local child component</p>'
};

Vue.component('todo-footer', {
	template: '<p>This is another global child component</p>'
});

var app = new Vue({
  el: '#app',
  data: {
    message : 'This is a parent component'
  },
	components: {
		'todo-list': cmp
	}
});*/
Vue.component('sibling-component',{
	props:['propsdata'],
	template: '<p>{{ propsdata }}</p>'
});

Vue.component('child-component',{
	props:['propsdata'],
	template: '<p>{{ propsdata }}</p>'
});

var app = new Vue({
	el:'#app',
	data: {
		message: 'Hello Vue! passed from Parent Component',

		anothermessage: 'Hello Vue! '
	}
});
