<template>
  <div class="view-wrap">
    <div class="view-content" :class="darkMode ? 'mode--dark' : ''">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Flex',
  data () {
    return {}
  }
}
</script>

<style scoped lang="stylus" src="./Flex.styl">