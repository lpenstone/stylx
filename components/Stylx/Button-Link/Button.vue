<template>
  <button class="btn" :class="['btn--' + as, 'btn--' + size]" @click="clicked()">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
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
    click: {
      stype: String
    }
  },
  data () {
    return {}
  },
  methods: {
    clicked: function (config) {
      if (this.click === 'modal') {
        this.$store.commit('openModal')
        return
      }
      this.$emit('clicked', config)
    }
  }
}
</script>

<style scoped lang="stylus" src="./Button-Link.styl">