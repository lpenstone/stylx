<template>
  <form class="form">
    <slot></slot>
    <x-button size="lg" type="submit" class="margin--center-block">Submit</x-button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    as: {
      type: String,
      default: 'standard'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="stylus" src="./Form.styl">