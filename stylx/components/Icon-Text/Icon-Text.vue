<template>
  <div class="text-icon__wrap" :class="['text-icon__wrap--' + as, 'text-icon__wrap--' + iconSize]">
    <div class="icon__wrap" :class="['icon__wrap--' + as, {'center-padding': iconAs === 'standard'}]">
      <x-icon :as="iconAs" :size="iconSize" :icon="icon" :brand="brand"/>
    </div>
    <div class="text__wrap" :class="'text__wrap--' + as">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icon-Text',
  props: {
    as: {
      type: String,
      default: 'standard'
    },
    iconAs: {
      type: String,
      default: 'standard'
    },
    iconSize: {
      type: String,
      default: 'md'
    },
    icon: {
      type: String
    },
    brand: {
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="stylus" src="./Icon-Text.styl">