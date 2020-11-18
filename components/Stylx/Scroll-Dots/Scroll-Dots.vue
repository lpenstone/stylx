<template>
  <div class="dots" :class="{'dots--right': right, 'dots--left': left}">
    <div class="dots__dot"></div>
    <div class="dots__dot"></div>
    <div class="dots__dot"></div>
    <div class="dots__dot"></div>
    <div class="dots__dot"></div>
    <div class="dots__dot"></div>
    <div class="dots__dot"></div>
  </div>     
</template>
<script>
export default {
  name: 'Scroll-Dots',
  data () {
    return {
      right: false,
      left: false
    }
  },
  methods: {
    scrollLeft: function () {
      this.left = true
      setTimeout(() => {
        this.left = false
      }, 400)
    },
    scrollRight: function () {
      this.right = true
      setTimeout(() => {
        this.right = false
      }, 400)
    }
  }
}
</script>
<style scoped lang="stylus" src="./Scroll-Dots.styl" >