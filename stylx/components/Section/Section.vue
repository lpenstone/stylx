<template>
  <section class="section" :class="['section--' + size, 'section--bg-' + bg, {'mode--dark': dark}]">
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
      default: function () {
        return this.$store.state.btnDefaultSize || 'md'
      }
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