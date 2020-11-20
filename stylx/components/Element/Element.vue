<template>
  <div class="element" :class="['element--' + size, as === 'center' ? 'element--center' : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Element',
  props: {
    as: {
      type: String,
      default: 'standard'
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="stylus" src="./Element.styl">