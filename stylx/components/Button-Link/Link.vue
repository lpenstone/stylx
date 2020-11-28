<template>
  <router-link
    @click="clicked()"
    v-if="to"
    :to="to"
    :class="[{'btn': btn}, 'btn btn--' + as , ' btn--' + size]" 
    :aria-label="as === 'icon' ? icon || brand : false">
    <i v-if="icon" :class="['fa', 'fa-' + icon, 'fa-' + size]"></i>
    <i v-else-if="brand" :class="['fab', 'fa-' + brand, 'fa-' + size]"></i>
    <slot></slot>
  </router-link>
  <a v-else-if="href"
    @click="clicked()"
    :href="href" :class="[{'btn': btn}, 'btn btn--' + as , ' btn--' + size]"
    :aria-label="as === 'icon' ? icon || brand : false">
    <i v-if="icon" :class="['fa', 'fa-' + icon, 'fa-' + size]"></i>
    <i v-else-if="brand" :class="['fab', 'fa-' + brand, 'fa-' + size]"></i>
    <slot></slot>
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
  computed: {
    btn: function () {
      return this.as !== 'link'
    }
  },
  methods: {
    clicked: function (config) {
      this.$emit('click', config)
    }
  }
}
</script>

<style scoped lang="stylus" src="./Button-Link.styl">