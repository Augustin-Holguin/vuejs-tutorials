<template>
  <div>
    <!-- <transition name="fade" appear> -->
    <transition :css="false" @enter="enter" @leave="leave">
      <div class="ui message success" v-if="visible">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </transition>
    <!-- </transition> -->
    <button @click="toggle">Toggle</button>
  </div>
</template>


<script>
  let slides = {
    methods: {
      enter: function (el, done) {
        $(el).hide().slideDown(500, done)
      },
      leave: function (el, done) {
        $(el).show().slideUp(500, done)
      }
    }
  }


  export default {
    mixins: [slides],
    data () {
      return {
        visible: true
      }
    },
    methods: {
      toggle: function () {
        this.visible = !this.visible
      }
    }
  }
</script>


<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    transform: .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
    transform: translate(20px);
  }
</style>
