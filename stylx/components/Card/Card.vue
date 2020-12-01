<template>
  <div class="card" :class="['card--' + as, 'card--' + size]">
    <div v-if="as.indexOf('browser') > -1" class="card__browser-bar">
      <div class="browser__circle browser__circle--red"/>
      <div class="browser__circle browser__circle--yellow"/>
      <div class="browser__circle browser__circle--green"/>
    </div>
    <div v-if="as.indexOf('phone') > -1" class="card__phone-bar">
      <div class="phone__speaker"/>
    </div>
    <div class="card__content">
      <slot></slot>
    </div>
    <div v-if="as.indexOf('phone') > -1" class="card__phone-footer">
      <div class="phone__btn"/>
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