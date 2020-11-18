<template></template>

<script>
export default {
  name: 'success',
  data () {
    return {}
  },
  beforeMount: function () {
    this.$router.push({
      name: 'contact',
      query: {
        notice: 'success'
      }
    })
  }
}
</script>
