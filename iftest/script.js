function iine(){
  alert('いいね')
}
new Vue({
  el: '#app',
  data: {
    myVisible: false,
    myVisible2: false,
    isShow: true,
  },
  methods: {
    iine: function(){
      this.isShow = false
    }
  }
})