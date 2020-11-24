<template>
  <section :ref="name" class="section mode--dark"
    :class="['section--' + size, {'section--fixed': as === 'fixed'}]"
    :style="`background-image: url(${src});`">
    <div class="section__screen" :style="`background-color: rgba(0,0,0, ${screen});`"></div>
    <div class="section__inner">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Img-Section',
  props: {
    as: {
      type: String,
      default: 'standard'
    },
    size: {
      type: String,
      default: 'md'
    },
    name: {
      type: String,
      default: ''
    },
    screen: {
      type: String,
      default: '0.0'
    }
  },
  data () {
    return {
      src: ''
    }
  },
  mounted: function () {
    this.getImgSrc()
  },
  methods: {
    getImgSrc: function () {
      const imgEl = this.$refs[this.name].getElementsByClassName('background')[0]
      this.src = imgEl.src
    }
  }
}
</script>

<style scoped lang="stylus" src="./Img-Section.styl">