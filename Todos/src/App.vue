<template>
  <div>
    <todos></todos>
    <br/>
    <carousel>
      <carousel-slide>
        Yo
        <img src="http://lorempicsum.com/futurama/630/300/1">
      </carousel-slide>
      <carousel-slide>
        Yi
        <img src="http://lorempicsum.com/futurama/630/300/2">
      </carousel-slide>
    </carousel>
    <br/><br/>
  </div>
</template>

<script>
import Todos from './components/todos/Todos'
import Carousel from './components/carousel/Carousel'
import CarouselSlide from './components/carousel/CarouselSlide'

export default {
  components: {
    Todos,
    Carousel,
    CarouselSlide
  }
}
</script>
