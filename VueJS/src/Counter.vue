<template>
  <div class="counter">
    {{ count }}
    <div class="counter__button" @click="increment">+</div>
  </div>
</template>


<script>
  import store from './store/NotificationsStore'

  export default {
    data () {
      return {
        state: store.state
      }
    },
    computed: {
      count: function () { return this.state.count }
    },
    methods: {
      increment () {
        store.increment()
      }
    }
  }
</script>

<style>

  .counter {
    font-weight: bold;
    font-size: 2em;
    color: gold;
  }

  .counter__button {
    cursor: pointer;
    color: blue;
  }
</style>
