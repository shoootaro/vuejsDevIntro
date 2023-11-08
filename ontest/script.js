function iine(){
  alert('いいね')
}
new Vue({
  el: '#app',
  data: {
    count: 0,
    isClick: false,
    count2: 0,
    myText: 'Hello',
  },
  methods: {
    countUp: function(){
      this.count++
    },
    oneClick: function(){
      this.isClick = true
      iine()
    },
    countUp2: function(value){
      this.count2 += value
    },
    showAlert: function(){
      alert('Shift + Enterキーを押しました')
    }
  }
})