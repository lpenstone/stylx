<template>
  <section class="section" :class="['section--' + size, 'section--bg-' + bg, {'mode--dark': dark}, {'top': top}, swoosh ? 'section--swoosh-' + swoosh : '', wave ? 'section--wave-' + wave : '']">
    <div class="section__inner">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    as: {
      type: String,
      default: 'standard'
    },
    size: {
      type: String,
      default: 'md'
    },
    top: {
      type: Boolean,
      default: false
    },
    wave: {
      type: String
    },
    swoosh: {
      type: String
    }
  },
  computed: {
    bg: function () {
      if (this.as === 'dark') return 'standard'
      return this.as.split('-')[0]
    },
    dark: function () {
      return this.as.indexOf('dark') > -1
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="stylus" src="./Section.styl">