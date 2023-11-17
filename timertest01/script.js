new Vue({
  el: '#app',
  data: {
  },
  watch: {
  }
})

function startTimer(){
  // 残り5秒
  this.restSec = 5
  // タイマースタート
  // 1秒(1000ミリ秒)ごとにcountDown()を実行
  this.timerObj = setInterval(() => {countDown()}, 1000)
}
function countDown(){
  // 1秒減らす
  this.restSec --
  // 0秒以下になったらアラート＆タイマー停止
  if(this.restSec <= 0){
    alert("制限時間です")
    clearInterval(this.timerObj)
  }
}