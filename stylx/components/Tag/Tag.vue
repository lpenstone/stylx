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
    return {
      classType: '',
      color: ''
    }
  },
  created: function () {
    this.setTagStyle()
  },
  methods: {
    setTagStyle: function () {
      if (['hollow', 'standard', 'secondary'].indexOf(this.as) > -1) {
        this.classType = this.as
      } else {
        this.color = this.as
      }
    }
  }
}
</script>

<style scoped lang="stylus" src="./Tag.styl">