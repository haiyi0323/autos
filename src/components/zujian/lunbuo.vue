<template>
  <div class="lunbuo">
<mu-carousel  hide-controls="true" hide-indicators>
  <mu-carousel-item>
    <img :src="carouselImg1">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg2">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg3">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg4">
  </mu-carousel-item>
</mu-carousel>
  </div>
</template>

<script>

import carouselImg1 from '../../assets/images/carousel1.jpg';
import carouselImg2 from '../../assets/images/carousel1.jpg';
import carouselImg3 from '../../assets/images/carousel1.jpg';
import carouselImg4 from '../../assets/images/carousel1.jpg';
export default {
  name: 'lunbuo',
  data () {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3,
      carouselImg4
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mu-carousel img{
    width: 100%;
}
.lunbuo{
    height: auto;
}
.mu-carousel{
    height: 210px;
}
</style>
