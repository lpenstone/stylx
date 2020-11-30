<template>
  <div ref="combo" class="combo__wrap" :class="['combo__wrap--' + asClass, 'combo__wrap--' + size, {'wrap__img--landscape': isLandscape}, {'combo__wrap--center': isCenter}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Combo',
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
    return {
      isLandscape: false
    }
  },
  computed: {
    isCenter: function () {
      return this.as.indexOf('center') > -1
    },
    asClass: function () {
      if (this.as.indexOf('-center') > -1) {
        return this.as.replace('-center', '')
      }
      return this.as
    }
  },
  mounted: function () {
    this.getImgDimensions()
  },
  methods: {
    getImgDimensions: function () {
      const combo = this.$refs.combo
      const img = combo.getElementsByTagName('img')[0]

      if (img) {
        const landscape = img.naturalHeight < img.naturalWidth
        this.isLandscape = landscape
      }
    }
  }
}
</script>

<style scoped lang="stylus" src="./Combo.styl">