<template>
  <div class="carousel">
    <section class="todoapp">
      <header>
        <h1>Carousel</h1>
      </header>
    </section>
    <slot></slot>
    <button class="carousel__nav carousel__next" @click.prevent="next"> > </button>
    <button class="carousel__nav carousel__prev" @click.prevent="prev"> < </button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        index: 0,
        slides: []
      }
    },
    mounted () {
      this.slides = this.$children
      this.slides.forEach((slide, i) => {
        slide.index = i
      })
    },
    computed: {
      slidesCount () { return this.slides.length }
    },
    methods: {
      next () {
        this.index++
        if (this.index >= this.slidesCount) {
          this.index = 0
        }
      },
      prev () {
        this.index--
        if (this.index < 0) {
          this.index = this.slidesCount - 1
        }
      }
    }
  }
</script>

<style>
  .carousel {
    position: relative;
  }

  .carousel__nav {
    position: absolute;
    top: 50%;
    left: 10px;
    font-size: 4em;
    color: white;
    width: 60px;
    height: 60px;
    background: black;
    border-radius: 50%;
  }

  .carousel__nav:hover {
    background: pink;
    cursor: pointer;
  }

  .carousel__nav.carousel__next {
    right: 10px;
    left: auto;
    font-size: 4em;
    color: white;
    width: 60px;
    height: 60px;
  }

</style>
