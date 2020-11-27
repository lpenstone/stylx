<template>
  <x-swipe @swipeRight="prevItem" @swipeLeft="nextItem">
    <div class="carousel">
      <div ref="carousel" class="carousel__content" :class="'carousel__content-index-' + index" :style="height ? `min-height: ${height}px` : 'min-height: auto'">
        <slot></slot>
      </div>
      <div class="carousel__btn carousel__btn--previous">
        <x-button ref="prevBtn" as="icon" aria-label="previous" @click="clickPrev()">&#8701;</x-button>
      </div>
      <div class="carousel__btn carousel__btn--next">
        <x-button ref="nextBtn" as="icon" aria-label="next" @click="clickNext()">&#8702;</x-button>
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
      type: String
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
      index: this.startIndex,
      nItems: '2',
      timer: null,
      clicked: false,
      cycleTime: 3000
    }
  },
  created: function () {
    if (process.browser) {
      window.addEventListener('keydown', this.navigate)
    }
    this.getCycleTime()
  },
  mounted: function () {
    this.nItems = this.items || this.getItemsNumber()
    if (this.as.indexOf('cycle') > -1) this.autoScroll()
  },
  computed: {
    isModalOpen: function () {
      return this.$store.state.modal.isOpen
    }
  },
  methods: {
    navigate: function (e) {
      if (e.key === 'ArrowRight') {
        this.nextItem()
        this.$refs.nextBtn.$el.focus()
      }
      if (e.key === 'ArrowLeft') {
        this.prevItem()
        this.$refs.prevBtn.$el.focus()
      }
    },
    clickNext: function () {
      this.clicked = true
      this.nextItem()
    },
    nextItem: function () {
      if (this.isModalOpen && this.as !== 'modal') return
      this.$refs.dots.scrollRight()
      setTimeout(() => {
        if (this.index === Number(this.nItems)) {
          this.index = 1
        } else {
          this.index ++
        }
      }, 250)
    },
    clickPrev: function () {
      this.clicked = true
      this.prevItem()
    },
    prevItem: function () {
      if (this.isModalOpen && this.as !== 'modal') return
      this.$refs.dots.scrollLeft()
      setTimeout(() => {
        if (this.index === 1) {
          this.index = Number(this.nItems)
        } else {
          this.index --
        }
      }, 250)
    },
    getCycleTime: function () {
      if (this.as.indexOf('cycle') > -1) {
        const array = this.as.split('-')
        if (array[1]) {
          this.cycleTime = Number(array[1])
        } else {
          this.cycleTime = 3000
        }
      }
    },
    autoScroll: function () {
      this.timer = setTimeout(() => {
        if (this.clicked) {
          clearTimeout(this.timer)
          return
        }
        this.nextItem()
        this.autoScroll()
      }, this.cycleTime)
    },
    getItemsNumber: function () {
      const carousel = this.$refs.carousel
      return carousel.children.length.toString()
    }
  },
  watch: {
    as: function (value) {
      clearTimeout(this.timer)
      if (value.indexOf('cycle') > -1) {
        this.getCycleTime()
        this.autoScroll()
      }
    }
  },
  destroyed: function () {
    if (process.browser) {
      window.removeEventListener('keydown', this.navigate)
    }
  }
}
</script>
<style scoped lang="stylus" src="./Carousel.styl" >