new Vue({
  el: '#app',
  data: {
  },
  methods: {
  }
})

var dataArray = ['one', 'two', 'three', 'four', 'five']
function shuffleData(){
  // 一時的な空配列を用意
  var buffer = []
  // 元配列の個数
  var len = this.dataArray.length
  // 元配列を減らしながら繰り返す
  for (var i = len; len > 0; len --){
    // rはその時点での個数内でランダム
    var r = Math.floor(Math.random() * len)
    // 元配列からランダムに１つ一時的な配列に追加
    buffer.push(this.dataArray[r])
    // 元配列からランダムに１つ削除
    this.dataArray.splice(r, 1)
  }
  // 一時的な配列を元の配列に入れる
  this.dataArray = buffer
  // シャッフルの確認
  alert(dataArray)
}