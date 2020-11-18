<template>
  <div class="margin--top-5 margin--bottom-5">
    <x-link v-for="(social, name) in socials" as="plain" :href="social" target="_blank" class="margin--right-5 margin--left-5" v-bind:key="name">
      <i :class="['fab', 'fa-' + name]"></i>
    </x-link>
  </div>
</template>

<script>
export default {
  name: 'Social',
  data () {
    return {}
  },
  computed: {
    socials: function () {
      return this.$store.state.config.socials
    }
  }
}
</script>