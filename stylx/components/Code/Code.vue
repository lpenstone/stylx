<template>
  <div class="code" :class="'code--' + size">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Code',
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