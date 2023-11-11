new Vue({
  el: '#app',
  data: {
    price: 100,
    count: 1,
    myText: '今日はいい天気です',
    findWord: '',
    items: ['桃太郎', '花咲かじいさん', '浦島太郎', 'かぐや姫', 'かちかち山'],
    R: 255,
    G: 150,
    B: 100,
  },
  computed: {
    // priceかcountが変わったら合計金額を算出する
    sum: function(){
      return this.price * this.count
    },
    // 合計金額が変わったら消費税込み金額を算出する
    taxIncluded: function(){
      return this.sum * 1.08
    },
    // myTextの長さが変わったら残りの文字数を算出する
    remaining: function(){
      return 140 - this.myText.length
    },
    // remainingが変わったらcomputedColorを算出する
    computedColor: function(){
      col = "green"
      if(this.remaining < 20){
        col = "orange"
      }
      if(this.remaining < 1){
        col = "red"
      }
      return col
    },
    // this.findWordが変わったらその文字が含まれるリストを算出する
    findItems: function(){
      if(this.findWord){
        return this.items.filter(function(value){
          return (value.indexOf(this.findWord) > -1)
        }, this)
      } else {
        // this.findWordが空のときはリストをそのまま返す
        return this.items
      }
    },
    // RかGかBの値が変わったらできた色を算出する
    mixColor: function(){
      var ans = "RGB(" + this.R + "," + this.G + "," + this.B + ")" 
      return ans
    }
  }
})