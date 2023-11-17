new Vue({
  el: '#app',
  data: {
    restSec: 5,
    timerObj: null
  },
  methods: {
    startTimer: function(){
      // 残り５秒
      this.restSec = 5
      // １秒(1000ミリ秒)ごとに１秒減らす
      this.timerObj = setInterval(() => {
        this.restSec --
      }, 1000);
    }
  },
  watch: {
    // 残り秒数を監視する
    restSec: function(){
      // 0秒以下になったらアラート＆タイマー停止
      if(this.restSec <= 0){
        alert("制限時間です")
        clearInterval(this.timerObj)
      } 
    }
  }
})