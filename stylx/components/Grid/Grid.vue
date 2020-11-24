<template>
  <div class="grid__window">
    <div class="grid" :ref="name" :class="['grid--' + cols, {'grid--zoomable': zoomable}, {'grid--gallery': gallery}]" @click="handleClick($event)">
      <slot></slot>
    </div>
    <x-modal ref="gridModal" v-if="gallery" :name="name">
      <x-carousel as="modal" :items="carouselItems" :startIndex="carouselIndex" height="210">
        <slot></slot>
      </x-carousel>
    </x-modal>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    as: {
      type: String
    },
    cols: {
      type: String,
      default: '3'
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      carouselItems: '0',
      carouselIndex: 0
    }
  },
  computed: {
    zoomable: function () {
      return this.as === 'zoom'
    },
    gallery: function () {
      return this.as === 'gallery'
    }
  },
  methods: {
    openGallery: function (e) {
      const el = e.target
      const item = el.parentElement
      if (item.className === 'item') {
        const grid = this.$refs[this.name]
        const elements = grid.children
        const index = Array.prototype.slice.call(elements).indexOf(item)

        this.carouselItems = elements.length.toString()
        this.carouselIndex = index + 1

        this.$refs.gridModal.openModal(this.name)
      }
    },
    handleClick: function (e) {
      if (this.gallery) {
        this.openGallery(e)
      } else if (this.zoomable){
        this.zoom(e)
      }
    },
    zoom: function (e) {
      const el = e.target.parentElement
      if (el.classList.contains('item--zoom')) {
        el.classList.remove('item--zoom')
      } else {
        el.classList.add('item--zoom')
      }
    }
  }
}
</script>

<style scoped lang="stylus" src="./Grid.styl">