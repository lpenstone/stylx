<template>
  <div class="view-wrap" :class="darkMode ? 'mode--dark' : ''">
    <div class="view-content">
      <Nuxt/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Minimal',
  data () {
    return {}
  }
}
</script>

<style scoped lang="stylus">

.view-wrap
  .view-content
    min-height: 90vh

</style>