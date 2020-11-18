<template>
  <div class="tag" :class="'tag--' + as">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    as: {
      type: String,
      default: 'standard'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="stylus" src="./Tag.styl">