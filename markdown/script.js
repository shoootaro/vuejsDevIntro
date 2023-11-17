new Vue({
  el: '#app',
  data: {
    input: '',
  },
  computed: {
    // inputが変わったらconvertMarkdownを算出する
    convertMarkdown: function(){
      return marked(this.input)
    }
  }
})