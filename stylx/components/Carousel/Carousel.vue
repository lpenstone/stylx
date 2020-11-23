<template>
  <x-swipe @swipeRight="prevItem" @swipeLeft="nextItem">
    <div class="carousel">
      <div class="carousel__content" :class="'carousel__content-index-' + index" :style="height ? `min-height: ${height}px` : 'min-height: auto'">
        <slot></slot>
      </div>
      <div class="carousel__btn carousel__btn--previous">
        <x-button as="icon" aria-label="previous" @click="prevItem()">&#8701;</x-button>
      </div>
      <div class="carousel__btn carousel__btn--next">
        <x-button as="icon" aria-label="next" @click="nextItem()">&#8702;</x-button>
      </div>
      <div class="carousel__dots-wrap">
        <div class="carousel__dots">
          <x-scroll-dots ref="dots"></x-scroll-dots>
        </div>
      </div>
    </div>
  </x-swipe>
</template>
<script>
import Swipe from '../Swipe/Swipe'
import ScrollDots from '../Scroll-Dots/Scroll-Dots'

export default {
  name: 'Carousel',
  components: {
    'x-swipe': Swipe,
    'x-scroll-dots': ScrollDots
  },
  props: {
    as: {
      type: String,
      default: 'standard'
    },
    items: {
      type: String,
      default: '2'
    },
    height: {
      type: String
    },
    startIndex: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      index: this.startIndex
    }
  },
  created: function () {
    if (process.browser) {
      window.addEventListener('keydown', this.navigate)
    }
  },
  computed: {
    isModalOpen: function () {
      return this.$store.state.modal.isOpen
    }
  },
  methods: {
    navigate: function (e) {
      if (e.key === 'ArrowRight') this.nextItem()
      if (e.key === 'ArrowLeft') this.prevItem()
    },
    nextItem: function () {
      if (this.isModalOpen && this.as !== 'modal') return
      this.$refs.dots.scrollRight()
      setTimeout(() => {
        if (this.index === Number(this.items)) {
          this.index = 1
        } else {
          this.index ++
        }
      }, 350)
    },
    prevItem: function () {
      if (this.isModalOpen && this.as !== 'modal') return
      this.$refs.dots.scrollLeft()
      setTimeout(() => {
        if (this.index === 1) {
          this.index = Number(this.items)
        } else {
          this.index --
        }
      }, 350)
    },
  },
  destroyed: function () {
    if (process.browser) {
      window.removeEventListener('keydown', this.navigate)
    }
  }
}
</script>
<style scoped lang="stylus" src="./Carousel.styl" >