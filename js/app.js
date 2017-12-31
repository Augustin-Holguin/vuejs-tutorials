let vm = new Vue ({
  el: '#app',
  data: {
    firstname: 'Gus',
    lastname: 'de la Vega',
    fullname: ''
  },
  watch: {
    fullname: function (value) {
      console.log('watch', value)
    }
  }
})
