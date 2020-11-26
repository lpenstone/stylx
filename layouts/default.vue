<template>
  <div class="view-wrap" :class="darkMode ? 'mode--dark' : ''">
    <div class="view-content" :inert="isModalOpen">
      <div v-if="isDocs" class="expand__wrap" :class="[{'expand__wrap--expanded': expanded}, {'expand__wrap--lowered': showTableContent}]">
        <div @click="expanded = false" class="screen"></div>
        <div class="contents__wrap">
          <x-section size="sm">
            <x-content>
              <contents-table @clicked="expanded = false"></contents-table>
            </x-content>
          </x-section>
        </div>
        <x-button as="plain" @click="expanded = !expanded" class="expand__btn">
          <div class="expand__caret"></div>
        </x-button>
      </div>
      <x-nav></x-nav>
      <Nuxt />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Layout',
  data () {
    return {
      showTableContent: false,
      contentTop: 0,
      expanded: false,
    }
  },
  computed: {
    darkMode: function () {
      return this.$store.state.darkMode
    },
    isModalOpen: function () {
      return this.$store.state.modal.isOpen
    },
    isDocs: function () {
      return this.$route.name === 'docs'
    }
  },
  mounted: function () {
    this.getContentTop()
    this.handleScroll()
    this.setScroll()
  },
  methods: {
    handleScroll: function () {
      let scrollPosition = window.scrollY
      if (scrollPosition >= this.contentTop - 60) {
        if (!this.showTableContent) this.showTableContent = true
      } else {
        if (this.showTableContent) this.showTableContent = false
      }
    },
    getContentTop: function () {
      this.contentTop = document.getElementById('content').offsetTop
    },
    setScroll: function () {
      if (this.isDocs) {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.getContentTop)
      }
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
@import '~@/assets/styles/variables'

.expand__wrap
  width: 100%
  height: auto
  max-height: 90vh
  position: fixed
  top: 60px
  left: 0px
  z-index: 3
  overflow: visible
  transform: translate(0, -110%)
  transition: transform 0.6s ease-in-out
  display: flex
  justify-content: center

  &.expand__wrap--lowered
    transform: translate(0, -100%)

  &.expand__wrap--expanded
    transform: translate(0, 0)

    .expand__btn
      transform: translate(0, -23px) scaleY(-1)

    .screen
      display: block

  .expand__btn
    position: absolute
    bottom: -22px
    display: block
    width: 46px
    height: 22px
    background-color: white
    border-bottom-right-radius: 22px
    border-bottom-left-radius: 22px
    z-index: 10
    transform: translate(0, 0)
    transition: transform 0.6s ease-in-out
    box-shadow: none

    &:focus
      box-shadow: none

    .expand__caret
      position: absolute 
      top: 7px
      left: 15px
      content: ''
      width: 0
      height: 0
      display: inline-block
      border: 8px solid transparent
      border-top-color: grey

  .screen
    position: absolute 
    top: 0
    left: 0
    width: 100%
    height: 100vh
    display: none

.contents__wrap
  width: 100%
  max-height: 80vh
  overflow: auto
  background-color: white
  border-bottom: 1px solid $brand

.view-wrap
  .view-content
    min-height: 90vh

</style>