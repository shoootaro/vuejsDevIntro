var MyComponent = {
  props: ["object"],
  template: `
  <div style="width:300px;backgroundColor:#ffddaa;">
    <p style="backgroundColor:#ffa95e;">{{object.title}}</p>
    <p>解説:{{object.body}}</p>
  </div>`
}
new Vue({
  el: '#app',
  data: {
    dataArray: [
      {title:'AAA',body:'aaa'},
      {title:'BBB',body:'bbb'},
      {title:'CCC',body:'ccc'},
    ]
  },
  components: {
    'my-product': MyComponent
  },
  methods: {
    sortData: function(){
      this.dataArray.sort(function(a,b){
        return (a.title < b.title ? -1 : 1)
        return 0
      })
    },
    shuffleData: function(){
      var buffer = []
      var len = this.dataArray.length
      for (var i=len; len>0; len--){
        var r = Math.floor(Math.random() * len)
        buffer.push(this.dataArray[r])
        this.dataArray.splice(r,1)
      }
      this.dataArray = buffer
    }
  }
})