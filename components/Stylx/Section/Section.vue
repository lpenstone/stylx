<template>
  <section class="section" :class="['section--' + size, 'section--bg-' + as]">
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
  data () {
    return {}
  }
}
</script>

<style scoped lang="stylus" src="./Section.styl">