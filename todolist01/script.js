new Vue({
  el: '#app',
  data: {
    addtext: '',
    todos: [
      {done:false, text:'パンを買う'},
      {done:false, text:'コーヒーを買う'}
    ]
  },
  computed: {
    remaining: function(){
      return this.todos.filter(function(val){
        return val.done
      }).length
    }
  },
  methods: {
    addToDo: function(){
      if (this.addtext){
        this.todos.push({done:false, text:this.addtext})
        this.addtext = ''
      }
    },
    cleanToDo: function(){
      this.todos = this.todos.filter(function(val){
        return val.done == false
      })
    }
  }
})