<template>
  <button v-if="isLabel" @click="toggleLabel()"
    ref="stylxTag"
    class="tag"
    :class="[classType ? 'tag--' + classType : '', {'tag--pointer': isLabel}, {'tag--show-label': showLabel}]"
    :style="color ? `border-color: ${color}; background-color: ${color};` : ''">
    <div role="alert">
      <slot></slot>
      <div v-if="label" class="tag-label">
        {{label}}
      </div>
    </div>
  </button>
  <div v-else
    ref="stylxTag"
    class="tag"
    :class="[classType ? 'tag--' + classType : '']"
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
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showLabel: false,
      isLabelEl: false
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
    },
    isLabel: function () {
      return this.label || this.isLabelEl
    }
  },
  mounted: function () {
    if (!this.$refs.stylxTag) return
    this.isLabelEl = this.$refs.stylxTag.getElementsByClassName('tag-label').length > 0
  },
  methods: {
    toggleLabel: function () {
      if (this.isLabel) {
        this.showLabel = !this.showLabel
      }
    }
  }
}
</script>

<style scoped lang="stylus" src="./Tag.styl">