function iine(){
  alert('いいね')
}
new Vue({
  el: '#app',
  data: {
    myArray: ['ジャムパン', 'メロンパン', 'コッペパン'],
    objArray: [
      {name: 'ジャムパン', price: 100},
      {name: 'メロンパン', price: 120},
      {name: 'コッペパン', price: 150},
      {name: 'あんぱん', price: 180},
    ],
    header: ["プログラミング言語", 2018, 2013, 2008, 2003, 1998],
    ranking: [
      ['Java', 1, 2, 1, 1, 16],
      ['C', 2, 1, 2, 2, 1],
      ['C++', 3, 4, 3, 3, 2],
      ['Python', 4, 7, 6, 11, 23],
      ['JavaScript', 7, 10, 8, 7, 20]
    ],
    myArray2: ['1つ目', '2つ目', '3つ目', '4つ目', '5つ目'],
    myArray3: ['one', 'two', 'three', 'four', 'five'],
    myArray4: ['1', '2', '3', '4', '5', '6']
  },
  methods: {
    addLast: function(){
      this.myArray2.push("[末尾に追加]")
    },
    addObj: function(index){
      this.myArray2.splice(index, 0, '[追加]')
    },
    changeObj: function(index){
      this.myArray2.splice(index, 1, '[変更]')
    },
    deleteObj: function(index){
      this.myArray2.splice(index, 1)
    },
    sortData: function(listdata){
      listdata.sort(function(a,b){
        return (a < b ? -1 : 1)
      })
    },
    evenData: function(){
      this.myArray4 = this.myArray4.filter(function(value){
        return value % 2 == 0
      })
    }
  }
})