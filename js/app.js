Vue.directive('salut', {
  bind: function (el, binding, vnode) {
    console.log(el, binding)
  }
})

let vm = new Vue ({
  el: '#app',
  data: {
    message: 'Gus',
  },
  watch: {
    fullname: function (value) {
      console.log('watch', value)
    }
  }
})
