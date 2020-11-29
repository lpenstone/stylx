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
      <x-content>
        <h2 class="h3 text-align--center">Responsive... out of the box</h2>
        <x-group as="center" size="lg" class="margin-top--50">
          <x-card id="browser-demo"
            as="browser-shadow"
            size="sm"
            :style="`width: ${demoWidth}px; max-width: 100%`">
            <button id="resize" @mousedown="start" @mouseover="resize($event)" @mouseup="stop">
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
      demoWidth: 450,
      timer: null,
      clicked: false,
      x1: 0,
      x2: 0
    }
  },
  methods: {
    start: function (e) {
      this.x1 = e.screenX
      this.x2 = e.screenX
      this.clicked = true
      window.addEventListener("mousemove", this.resize)
    },
    resize: function (e) {
      if (!this.clicked) return
      this.x2 = e.screenX
      let diff = this.x2 - this.x1
      this.demoWidth += diff
      console.log(diff, this.demoWidth)
      this.x1 = this.x2
    },
    stop: function (e) {
      this.clicked = false
      window.removeEventListener("mousemove", this.resize)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables'

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

.logo
  width: 100%
  max-width: 100px

.responsive-iframe
  width: 100%
  height: 500px
  border: 0

</style>

