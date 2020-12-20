<template>
  <div @click="toggleLabel()"
    class="tag"
    :class="[classType ? 'tag--' + classType : '', {'tag--pointer': label}]"
    :style="color ? `border-color: ${color}; background-color: ${color};` : ''">
    <slot></slot>
    <div v-if="label" class="tag-label" :class="{'tag-label--show': showLabel}">
      {{label}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    as: {
      type: String,
      default: 'standard'
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showLabel: false
    }
  },
  computed: {
    classType: function () {
      if (['hollow', 'standard', 'secondary'].indexOf(this.as) > -1) {
        return this.as
      }
      return ''
    },
    color: function () {
      if (['hollow', 'standard', 'secondary'].indexOf(this.as) > -1) {
        return ''
      }
      return this.as
    }
  },
  methods: {
    toggleLabel: function () {
      if (this.label) this.showLabel = !this.showLabel
    }
  }
}
</script>

<style scoped lang="stylus" src="./Tag.styl">