<template>
  <router-link v-if="to" :to="to" :class="[btn ? 'btn btn--' + as : '', ' btn--' + size]" :target="target">
    <slot></slot>
  </router-link>
  <a v-else-if="href" :href="href" :class="[btn ? 'btn btn--' + as : '', ' btn--' + size]" :target="target">
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
      default: function () {
        return this.$store.state.btnDefaultSize || 'md'
      }
    },
    to: {
      type: Object
    },
    href: {
      type: String
    },
    target: {
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
      this.$emit('clicked', config)
    }
  }
}
</script>

<style scoped lang="stylus" src="./Button-Link.styl">