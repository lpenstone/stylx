<template>
  <div class="accordion" :class="{'accordion--expanded': isExpanded}">
    <button class="accordion__label" @click="isExpanded = !isExpanded">
      {{label}}
    </button>
    <div class="accordion__content-wrap">
      <div class="accordion__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
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

<style scoped lang="stylus" src="./Accordion.styl">