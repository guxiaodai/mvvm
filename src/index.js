import Mvvm from './js/Mvvm';


let mv = new Mvvm({
  el: '#app',
  data: {
    val: '你好',
    message: {
      name: 'bob',
      age: 23
    }
  }
})

window.onload = function() {
  document.getElementById('btn').addEventListener('click', function(e) {
    mv.$data.message.name = 'mmm'
  })
}
