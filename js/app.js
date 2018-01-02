let counter = {
  data: function() {
    return {
      count: 0
    }
  },
  props: {
    start: {type: Number, default: 0}
  },
  computed: {
    total: function() {
      return this.start + this.count
    }
  },
  methods: {
    increment: function () {
      this.count ++
    }
  },
  template: `<button @click="increment">{{ total }}</button><br><br>`
}

let vm = new Vue ({
  el: '#app',
  components: { counter },
})
