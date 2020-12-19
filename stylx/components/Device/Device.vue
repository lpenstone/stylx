<template>
  <div class="device" :class="['device--' + as, 'device--' + size]">
    <div v-if="as.indexOf('browser') > -1" class="device__browser-bar">
      <div class="browser__circle browser__circle--red"/>
      <div class="browser__circle browser__circle--yellow"/>
      <div class="browser__circle browser__circle--green"/>
    </div>
    <div v-if="as.indexOf('phone') > -1" class="device__phone-bar">
      <div class="phone__speaker"/>
    </div>
    <div class="device__content">
      <slot></slot>
    </div>
    <div v-if="as.indexOf('phone') > -1" class="device__phone-footer">
      <div class="phone__btn"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'device',
  props: {
    as: {
      type: String,
      default: 'browser'
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

<style scoped lang="stylus" src="./Device.styl">