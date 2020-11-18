<template>
  <div class="view-wrap" :class="darkMode ? 'mode--dark' : ''">
    <div class="view-content">
      <x-nav></x-nav>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {}
  },
  computed: {
    darkMode: function () {
      return this.$store.state.darkMode
    }
  },
  watch: {
    $route () {
      this.$store.commit('toggleMenu', false)
    }
  }
}
</script>

<style scoped lang="stylus">

.view-wrap
  .view-content
    min-height: 90vh

</style>