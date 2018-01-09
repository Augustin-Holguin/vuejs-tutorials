<template>
  <div>
    <carousel> Hello
      <carousel-slide>
        Yo
      </carousel-slide>
    </carousel>
    <todos></todos>
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
