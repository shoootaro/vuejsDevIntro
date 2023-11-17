new Vue({
  el: '#app',
  data: {
    forbiddenText: 'だめ',
    inputText: '今日は天気です',
  },
  watch: {
    // 入力された文字列を監視する
    inputText: function(){
      var pos = this.inputText.indexOf(this.forbiddenText)
      if(pos >= 0){
        alert(this.forbiddenText + 'は入力できません')
        // 入力文字列から禁止文字を削除する
        this.inputText = this.inputText.substr(0, pos) 
      }
    }
  }
})