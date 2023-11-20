var obj1 = document.getElementById("loader")
obj1.addEventListener("change", loadFile, false)
function loadFile(e){
  file = e.target.files[0]
  if(file){
    var reader = new FileReader()
    reader.onload = function(e){
      console.log(">>>"+ e.target.result)
      json = JSON.parse(e.target.result)
      console.log(">>>"+ json[0].title)
      console.log(">>>"+ json[0].body)
    }
    reader.readAsText(file)
  }
}
new Vue({
  el: '#app',
  data: {
  },
})