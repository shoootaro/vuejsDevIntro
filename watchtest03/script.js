new Vue({
  el: '#app',
  data: {
    myNumber: 0,
    tweenedNumber: 0,
  },
  watch: {
    // myNumberを監視して値が変わったら実行
    myNumber: function(){
      // dataのtweenedNumberプロパティを1秒でmyNumberまで増やす
      TweenMax.to(this.$data, 1, {tweenedNumber: this.myNumber})
    }
  },
  computed: {
    // tweenedNumberが変わったら変化中のanimeNumberを算出する
    animeNumber: function(){
      return this.tweenedNumber.toFixed(0)
    }
  }
})