<template>
  <button
    class="btn"
    :class="['btn--' + as, 'btn--' + size, {'btn--selected': selected}]"
    @click="clicked()"
    :aria-label="as === 'icon' ? icon || brand : ''">
    <i v-if="icon" class="icon" :class="['fa', 'fa-' + icon, 'fa-' + size]"/><i v-else-if="brand" class="icon" :class="['fab', 'fa-' + brand, 'fa-' + size]"/><slot></slot>
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
      default: 'md'
    },
    icon: {
      type: String
    },
    brand: {
      type: String
    },
    click: {
      type: String
    },
    selected: {
      type: Boolean,
      default: false
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
      this.$emit('click', config)
    }
  }
}
</script>

<style scoped lang="stylus" src="./Button-Link.styl">