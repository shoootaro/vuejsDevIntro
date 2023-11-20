new Vue({
  el: '#app',
  data: {
    loadData: ''
  },
  methods: {
    onFileChange: function(e){
      file = e.target.files[0]
      if(file){
        var reader = new FileReader()
        var vm = this
        reader.onload = function(e){
          json = JSON.parse(e.target.result)
          vm.loadData = json
        }
        reader.readAsText(file)
      }
    }
  }
})