<template>
  <div id="swipe">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'swipe',
  data () {
    return {
      el: null,
      touch: {
        xStart: 0,
        xEnd: 0,
        yStart: 0,
        yEnd: 0
      }
    }
  },
  mounted: function () {
    this.el = document.getElementById('swipe')
    this.el.addEventListener('touchstart', this.touchStart.bind(event), true)
    this.el.addEventListener('touchmove', this.touchMove.bind(event), true)
    this.el.addEventListener('touchend', this.horizontalSwipe, true)
  },
  methods: {
    touchStart: function (e) {
      this.touch.xStart = e.touches[0].screenX
      this.touch.yStart = e.touches[0].screenY
    },
    touchMove: function (e) {
      this.touch.xEnd = e.touches[0].screenX
      this.touch.yEnd = e.touches[0].screenY
    },
    horizontalSwipe: function (e) {
      if (this.xPos2 === 0 || Math.abs(this.touch.yStart - this.touch.yEnd) > 40) return
      if (this.touch.xStart - this.touch.xEnd > 30) this.$emit('swipeLeft')
      if (this.touch.xStart - this.touch.xEnd < -30) this.$emit('swipeRight')
      this.resetTouchPoints()
    },
    resetTouchPoints: function () {
      this.touch.xStart = 0
      this.touch.xEnd = 0
      this.touch.yStart = 0
      this.touch.yEnd = 0
    }
  },
  destroyed: function () {
    this.el.removeEventListener('touchstart', this.touchStart, true)
    this.el.removeEventListener('touchmove', this.touchMove, true)
    this.el.removeEventListener('touchend', this.horizontalSwipe, true)
  }
}
</script>