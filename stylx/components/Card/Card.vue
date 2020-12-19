<template>
  <div class="card" :class="['card--' + as, 'card--' + size]">
    <div class="card__content">
      <slot></slot>
    </div>
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

<style scoped lang="stylus" src="./Card.styl">