new Vue({
  el: '#app',
  data: {
    message: "Coding is life",
    success: true,
    planets: ["Earth", "Mars", "Jupiter", "Saturn"]
  },
  methods: {
    close: function () {
      this.message = "closed"
      this.success = false
    }
  }
})
