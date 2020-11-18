<template>
  <div class="see-more">
    <div class="see-more__content" :class="{'see-more__content--hidden': !isExpanded}">
      <slot></slot>
    </div>
    <x-button :as="as" :size="size" @clicked="isExpanded = !isExpanded">
      <span v-if="isExpanded">Show less</span>
      <span v-else>{{label || 'See more'}}</span>
    </x-button>
  </div>
</template>

<script>
export default {
  name: 'Element',
  props: {
    as: {
      type: String,
      default: 'link'
    },
    size: {
      type: String,
      default: 'md'
    },
    label: {
      type: String
    }
  },
  data () {
    return {
      isExpanded: false
    }
  }
}
</script>

<style scoped lang="stylus" src="./See-More.styl">