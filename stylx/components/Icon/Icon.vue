<template>
  <span class="icon__wrap" :class="['icon__wrap--' + as, 'icon__wrap--' + size]">
    <i v-if="icon" :class="['fa', 'fa-' + icon, 'fa-' + size]"></i>
    <i v-else-if="brand" :class="['fab', 'fa-' + brand, 'fa-' + size]"></i>
  </span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    as: {
      type: String,
      default: 'standard'
    },
    size: {
      type: String,
      default: function () {
        return this.$store.state.config.btnDefaultSize || 'md'
      }
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

<style scoped lang="stylus" src="./Icon.styl">