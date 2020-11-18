<template>
  <div v-html="iframe"></div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    as: {
      type: String,
      default: 'standard'
    },
    url: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  data () {
    return {
      source: '',
      iframe: '',
      heights: {
        sm: '250',
        md: '400',
        lg: '600'
      }
    }
  },
  created: function () {
    this.getSource()
  },
  methods: {
    getSource: function () {
      const location = this.url.replace('https://', '').replace('www.', '').replace('google.com', '').replace('/maps/', '').replace('place/', '')
      this.iframe = `<iframe ref="frame" width="100%" height="${this.heights[this.size]}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${location}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`
    }
  }
}
</script>

<style scoped lang="stylus" src="./Map.styl">