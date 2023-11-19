var MyComponent = {
  template: '<p class="my-comp">Hello</p>'
}
new Vue({
  el: '#app',
  components: {
    'my-component': MyComponent
  }
})