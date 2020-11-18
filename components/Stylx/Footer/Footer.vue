<template>
  <section :class="'section--bg-' + as">
    <div class="section__inner">
      Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
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

<style scoped lang="stylus" src="./Footer.styl">