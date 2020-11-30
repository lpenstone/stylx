<template>
  <div>
    <x-section as="hero" id="hero">
      <x-content class="text-align--center">
        <x-group as="center" size="md">
          <img class="logo margin-bottom--30" src="~@/assets/images/stylx_logo.png" alt="">
          <h1 class="margin-bottom--30">Stylx UI framework</h1>
          <p class="heading--title margin-bottom--10">The essential development tool for building beautiful UI's fast</p>
          <p>(without a designer)</p>
          <div class="margin-top--40">
            <x-link as="hollow" size="lg" :to="{name: 'library'}" class="margin-left--5 margin-right--5 margin-bottom--10">
              View library
            </x-link>
            <x-link as="standard" size="lg" :to="{name: 'docs'}" class="margin-left--5 margin-right--5 margin-bottom--10">
              Get started
            </x-link>
          </div>
        </x-group>
      </x-content>
    </x-section>
    <x-section as="alt">
      <x-content class="text-align--center">
        <x-grid cols="3">
          <x-grid-item>
            <x-icon-combo as="center" iconAs="secondary" brand="vuejs">
              <strong>Use with Vue</strong>
              <p>Stylx integrates into Vue.js or Nuxt.js projects</p>
            </x-icon-combo>
          </x-grid-item>
          <x-grid-item>
            <x-icon-combo as="center" iconAs="secondary" brand="font-awesome-flag">
              <strong>Includes FontAwsome</strong>
              <p>Build your projects with access to 1000+ free icons</p>
            </x-icon-combo>
          </x-grid-item>
          <x-grid-item>
            <x-icon-combo as="center" iconAs="secondary" icon="code">
              <strong>Markup only</strong>
              <p>Build beautiful projects without every touching CSS</p>
            </x-icon-combo>
          </x-grid-item>
        </x-grid>
      </x-content>
    </x-section>
    <x-section>
      <div class="circle-decor circle-decor--1"></div>
      <x-content ref="resizeContainer">
        <h2 class="h3 text-align--center">Preview your elements</h2>
        <x-grid cols="2" class="margin-top--30">
          <x-grid-item>
            <x-group as="center" size="sm">
              <div class="text-align--center margin-top--30 margin-bottom--30">
                <x-link :as="currentAs" :size="currentSize" href="https://stylx.com" >Your link</x-link>
              </div>
              <x-code class="margin-top--10">
                &lt;x-link
                  as="{{currentAs}}"
                  size="{{currentSize}}"
                  href=""&gt;Your link&lt;/x-link&gt;
              </x-code>
            </x-group>
          </x-grid-item>
          <x-grid-item>
            <x-card as="shadow">
              <p class="h5">Attributes</p>
              <div class="margin-top--30">
                <x-tag as="secondary">as</x-tag>
                <div class="margin-top--10">
                  <strong>values:</strong>
                  <x-button size="sm" @click="currentAs = 'link'" :selected="currentAs === 'link'">link</x-button>
                  <x-button size="sm" @click="currentAs = 'link-alt'" :selected="currentAs === 'link-alt'">link-alt</x-button>
                  <x-button size="sm" @click="currentAs = 'standard'" :selected="currentAs === 'standard'">standard</x-button>
                  <x-button size="sm" @click="currentAs = 'hollow'" :selected="currentAs === 'hollow'">hollow</x-button>
                  <x-button size="sm" @click="currentAs = 'plain'" :selected="currentAs === 'plain'">plain</x-button>
                </div>
              </div>
              <div class="margin-top--20">
                <x-tag as="secondary">size</x-tag>
                <div class="margin-top--10">
                  <strong>values: </strong>
                  <x-button size="sm" @click="currentSize = 'sm'" :selected="currentSize === 'sm'">sm</x-button>
                  <x-button size="sm" @click="currentSize = 'md'" :selected="currentSize === 'md'">md</x-button>
                  <x-button size="sm" @click="currentSize = 'lg'" :selected="currentSize === 'lg'">lg</x-button>
                </div>
              </div>
            </x-card>
          </x-grid-item>
        </x-grid>
      </x-content>
    </x-section>
    <x-section size="lg">
      <div class="circle-decor circle-decor--3"></div>
      <div class="circle-decor circle-decor--4"></div>
      <x-content ref="resizeContainer">
        <h2 class="h3 text-align--center">Toggle dark mode</h2>
        <x-grid cols="2" class="margin-top--40">
          <x-grid-item class="text-align--center">
            <x-button size="lg" icon="lightbulb" @click="toggleMode()">Turn {{darkMode? 'on': 'off'}} the lights</x-button>
          </x-grid-item>
          <x-grid-item>
            <div id="dark-mode--hidden">
              <h3 class="heading--accent">That's better!</h3>
              <p>Within your custom configuration, you can enable a toggle between light and dark modes. You can also set dark mode as the default.</p>
            </div>
          </x-grid-item>
        </x-grid>
      </x-content>
    </x-section>
    <x-section>
      <div class="circle-decor circle-decor--2"></div>
      <x-content ref="resizeContainer">
        <h2 class="h3 text-align--center">Responsive design</h2>
        <x-group size="sm" id="responsive--hidden">
          <h3 class="heading--accent">Oh, hi!</h3>
          <p>Your elements will shrink, collapse, and adjust to suit any device, hassle free.</p>
        </x-group>
        <x-group as="center" size="lg" class="margin-top--50">
          <div class="demo-window__wrap">
            <button ref="resize" id="resize"
              @mousedown="start"
              @mouseup="stop">
              <x-icon icon="arrows-alt-h"/>
            </button>
            <x-card id="browser-demo"
              as="browser-shadow"
              size="sm"
              :style="`width: ${demoWidth}px; max-width: 100%; min-width: 300px`">
              <iframe id="demo-site" src="https://www.stylx.dev/z-demo" scrolling="no" title="demo site"/>
            </x-card>
          </div>
        </x-group>
      </x-content>
    </x-section>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      demoWidth: 900,
      maxWidth: 1000,
      minWidth: 340,
      timer: null,
      x1: 0,
      x2: 0,
      currentAs: 'link-alt',
      currentSize: 'lg'
    }
  },
  computed: {
    darkMode: function () {
      return this.$store.state.darkMode
    }
  },
  mounted: function () {
    this.getMaxWidth()
    window.addEventListener('resize', this.getMaxWidth)
    this.$refs.resize.addEventListener('touchstart', this.mobileStart, true)
  },
  methods: {
    getMaxWidth: function () {
      let elWidth = this.$refs.resizeContainer.$el.clientWidth
      this.maxWidth = 0.85 * elWidth
      if (this.demoWidth > this.maxWidth) this.demoWidth = this.maxWidth
    },
    start: function (e) {
      this.x1 = e.screenX
      this.x2 = e.screenX
      window.addEventListener('mouseup', this.stop)
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
    mobileStart: function (e) {
      this.x1 = parseInt(e.touches[0].screenX)
      this.x2 = parseInt(e.touches[0].screenX)

      this.$refs.resize.addEventListener('touchmove', this.mobileResize, true)
      this.$refs.resize.addEventListener('touchend', this.stop, true)
    },
    mobileResize: function (e) {
      this.x2 = parseInt(e.touches[0].screenX)
      let diff = this.x2 - this.x1
      this.demoWidth += diff

      if (this.demoWidth > this.maxWidth) this.demoWidth = this.maxWidth
      if (this.demoWidth < this.minWidth) this.demoWidth = this.minWidth
      this.x1 = this.x2
    },
    stop: function (e) {
      window.removeEventListener('mousemove', this.resize)
      window.removeEventListener('mouseup', this.stop)

      this.$refs.resize.removeEventListener('touchmove', this.resize, true)
      this.$refs.resize.removeEventListener('touchend', this.stop, true)
    },
    toggleMode: function () {
      this.$store.commit('toggleMode')
    }
  },
  destroyed: function () {
    window.removeEventListener('resize', this.getMaxWidth)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables'

.demo-window__wrap
  display: inline-block
  position: relative

#responsive--hidden
  position: absolute
  max-width: 270px
  left: 58%
  top: 50%

#dark-mode--hidden
  opacity: 0

.mode--dark
  #dark-mode--hidden
    opacity: 1

.circle-decor
  position: absolute
  left: 47%
  top: 15px
  border-radius: 50%
  opacity: 0.15
  display: block
  z-index: 0

  &.circle-decor--2
    width: 500px
    height: 500px
    left: 47%
    top: 15px
    background-color: $brand

  &.circle-decor--1
    width: 410px
    height: 410px
    left: 18%
    top: 33px
    background-color: $brand

  &.circle-decor--3
    width: 300px
    height: 300px
    left: 10%
    top: 50px
    background-color: $secondary

  &.circle-decor--4
    width: 140px
    height: 140px
    right: 10%
    left: auto
    bottom: 30px
    background-color: $secondary
  

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
  color: white !important
  cursor: ew-resize

.logo
  width: 100%
  max-width: 100px

#demo-site
  width: 100%
  height: 450px
  border: 0
  display: block

</style>

