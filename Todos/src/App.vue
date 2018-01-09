<template>
  <div>
    <todos></todos>
    <br/>
    <carousel>
      <carousel-slide>
        <img src="http://lorempicsum.com/futurama/550/300/1" width="100%">
      </carousel-slide>
      <carousel-slide>
        <img src="http://lorempicsum.com/futurama/550/300/2" width="100%">
      </carousel-slide>
      <carousel-slide>
        <img src="http://lorempicsum.com/futurama/550/300/3" width="100%">
      </carousel-slide>
      <carousel-slide>
        <img src="http://lorempicsum.com/futurama/550/300/4" width="100%">
      </carousel-slide>
      <carousel-slide>
        <img src="http://lorempicsum.com/futurama/550/300/5" width="100%">
      </carousel-slide>
    </carousel>
    <br><br><br>
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
