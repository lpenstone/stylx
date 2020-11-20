<template>
  <div class="card" :class="'card--' + size">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
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

<style scoped lang="stylus" src="./Code.styl">