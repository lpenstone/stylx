<template>
  <router-link
    @click="clicked()"
    v-if="to"
    :to="to"
    class="btn"
    :class="['btn--' + as , ' btn--' + size]" 
    :aria-label="as === 'icon' ? icon || brand : false">
    <i v-if="icon" class="icon" :class="['fa', 'fa-' + icon, 'fa-' + size]"/>
    <i v-else-if="brand" class="icon" :class="['fab', 'fa-' + brand, 'fa-' + size]"/><slot></slot>
  </router-link>
  <a v-else-if="href"
    @click="clicked()"
    class="btn"
    :href="href" :class="['btn--' + as , ' btn--' + size]"
    :aria-label="as === 'icon' ? icon || brand : false">
    <i v-if="icon" class="icon" :class="['fa', 'fa-' + icon, 'fa-' + size]"/>
    <i v-else-if="brand" class="icon" :class="['fab', 'fa-' + brand, 'fa-' + size]"/><slot></slot>
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    as: {
      type: String,
      default: 'link'
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
    to: {
      type: Object
    },
    href: {
      type: String
    }
  },
  data () {
    return {}
  },
  methods: {
    clicked: function (config) {
      this.$emit('click', config)
    }
  }
}
</script>

<style scoped lang="stylus" src="./Button-Link.styl">