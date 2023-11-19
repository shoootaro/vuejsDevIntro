var MyComponent = {
  template: '<p class="my-comp">私は{{myName}}です</p>',
  props: {
    myName: String
  },
  created: function(){
    if(this.myName == null){
      this.myName = "名無しの権兵衛"
    }
  }
}
new Vue({
  el: '#app',
  data: {
    myArray:['桃太郎', '浦島太郎', '金太郎', '三年寝太郎', '龍の子太郎']
  },
  components: {
    'my-component': MyComponent
  }
})