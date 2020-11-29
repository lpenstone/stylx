<template>
  <div>
    <x-section as="hero" id="hero">
      <x-content class="text-align--center">
        <x-group as="center" size="md">
          <img class="logo margin-bottom--30" src="~@/assets/images/stylx_logo.png" alt="">
          <h1 class="margin-bottom--30">Stylx UI framework</h1>
          <p class="heading--title">The essential development tool for...</p>
          <x-group as="center" size="sm">
            <x-carousel as="cycle-2500" class="margin-bottom--70">
              <x-carousel-item>
                <h2 class="heading--title">building websites quickly</h2>
              </x-carousel-item>
              <x-carousel-item>
                <h2 class="heading--title">accessible components</h2>
              </x-carousel-item>
              <x-carousel-item>
                <h2 class="heading--title">dark mode capability</h2>
              </x-carousel-item>
              <x-carousel-item>
                <h2 class="heading--title">responsive design</h2>
              </x-carousel-item>
              <x-carousel-item>
                <h2 class="heading--title">branding customizations</h2>
              </x-carousel-item>
            </x-carousel>
          </x-group>
          <div class="margin-top--20">
            <x-link as="hollow" size="lg" :to="{name: 'library'}" class="margin-left--5 margin-right--5 margin-bottom-10">
              View library
            </x-link>
            <x-link as="standard" size="lg" :to="{name: 'docs'}" class="margin-left--5 margin-right--5 margin-bottom-10">
              Get started
            </x-link>
          </div>
        </x-group>
      </x-content>
    </x-section>
    <x-section>
      <x-content class="text-align--center">
        <x-grid cols="3">
          <x-grid-item>
            <x-icon-text as="center" iconAs="secondary" brand="vuejs">
              <strong>Use with Vue</strong>
              <p>Stylx integrates into Vue.js or Nuxt.js projects</p>
            </x-icon-text>
          </x-grid-item>
          <x-grid-item>
            <x-icon-text as="center" iconAs="secondary" brand="font-awesome-flag">
              <strong>Includes FontAwsome</strong>
              <p>Build your projects with access to 1000+ free icons</p>
            </x-icon-text>
          </x-grid-item>
          <x-grid-item>
            <x-icon-text as="center" iconAs="secondary" icon="laptop-code">
              <strong>Preview your elements</strong>
              <p>Style and preview your elements, and copy the generated code</p>
            </x-icon-text>
          </x-grid-item>
        </x-grid>
      </x-content>
    </x-section>
    <x-section as="alt">
      <div id="circle-decor"></div>
      <x-content ref="resizeContainer">
        <h2 class="h3 text-align--center">Responsive... out of the box</h2>
        <x-group as="center" size="lg" class="margin-top--50">
          <x-card id="browser-demo"
            as="browser-shadow"
            size="sm"
            :style="`width: ${demoWidth}px; max-width: 100%; min-width: 300px`">
            <button ref="resize" id="resize"
              @mousedown="start"
              @mouseup="stop">
              <x-icon icon="arrows-alt-h"/>
            </button>
            <iframe class="responsive-iframe" src="https://www.stylx.dev/z-demo/" title="Responsive design demo"></iframe>
          </x-card>
        </x-group>
      </x-content>
    </x-section>
  </div>
</template>

<script>
export default {
  name: 'preview-card',
  data () {
    return {
      demoWidth: 650,
      maxWidth: 1000,
      minWidth: 340,
      timer: null,
      x1: 0,
      x2: 0
    }
  },
  mounted: function () {
    this.getMaxWidth()
    window.addEventListener('resize', this.getMaxWidth)

    this.$refs.resize.addEventListener('touchstart', this.start)
    this.$refs.resize.addEventListener('touchmove', this.resize)
    this.$refs.resize.addEventListener('touchend', this.stop)
  },
  methods: {
    getMaxWidth: function () {
      let elWidth = this.$refs.resizeContainer.$el.clientWidth
      this.maxWidth = 0.85 * elWidth
      if (this.demoWidth > this.maxWidth) this.demoWidth = this.maxWidth
    },
    start: function (e) {
      console.log('start')
      this.x1 = e.screenX
      this.x2 = e.screenX
      window.addEventListener('mouseup', this.stop)
      window.addEventListener('touchmove', this.resize)
      window.addEventListener('mousemove', this.resize)
    },
    resize: function (e) {
      this.x2 = e.screenX
      let diff = this.x2 - this.x1
      this.demoWidth += diff

      if (this.demoWidth > this.maxWidth) this.demoWidth = this.maxWidth
      if (this.demoWidth < this.minWidth) this.demoWidth = this.minWidth
      this.x1 = this.x2
    },
    stop: function (e) {
      window.removeEventListener('mousemove', this.resize)
      window.removeEventListener('mouseup', this.stop)
      window.removeEventListener('touchmove', this.resize)
      this.$refs.resize.removeEventListener('touchmove', this.resize)
      this.$refs.resize.removeEventListener('touchend', this.stop)
    }
  },
  destroyed: function () {
    window.removeEventListener('resize', this.getMaxWidth)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables'

#circle-decor
  position: absolute
  left: 47%
  top: 15px
  
  width: 500px
  height: 500px
  border-radius: 50%
  background-color: $secondary
  opacity: 0.15
  display: block
  z-index: 0

#resize
  position: absolute
  width: 50px
  height: 50px
  border-radius: 50%
  background-color: $brand
  border: none
  top: 40%
  right: -25px
  z-index: 3
  outline: 0
  cursor: ew-resize

.logo
  width: 100%
  max-width: 100px

.responsive-iframe
  width: 100%
  height: 500px
  border: 0

</style>

