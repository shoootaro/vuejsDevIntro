new Vue({
  el: '#app',
  data: {
    dataArray: ['桃太郎', 'かぐや姫', 'かちかち山'],
    addItem: ''
  },
  methods: {
    addList: function(){
      this.dataArray.push(this.addItem)
      this.addItem = ''
    },
    removeLast(){
      var lastIdx = this.dataArray.length - 1
      this.dataArray.splice(lastIdx, 1)
    }
  }
})