<template>
  <div class="tag"
    :class="classType ? 'tag--' + classType : ''"
    :style="color ? `border-color: ${color}; background-color: ${color};` : ''">
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
  }
}
</script>

<style scoped lang="stylus" src="./Tag.styl">