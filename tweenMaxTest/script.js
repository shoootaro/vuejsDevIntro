new Vue({
  el: '#app',
  data: {
  }
})

function myMove(){
  // movebtnのxプロパティを1秒で500増やす
  TweenMax.to('#movebtn', 1, {x: '500px'})
}