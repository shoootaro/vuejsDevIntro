new Vue({
  el: '#app',
  data: {
    dataArray: ['one', 'two', 'three', 'four', 'five']
  },
  methods: {
    sortData: function(){
      this.dataArray.sort(function(a,b){
        if(a<b) return -1
        if(a>b) return 1
        return 0
      })
    },
    shuffleData: function(){
      var buffer = []
      var len = this.dataArray.length
      for (var i=len; len>0; len--){
        var r = Math.floor(Math.random() * len)
        buffer.push(this.dataArray[r])
        this.dataArray.splice(r, 1)
      }
      this.dataArray = buffer
    }
  }
})