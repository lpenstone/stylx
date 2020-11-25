<template>
  <div class="view-wrap" :class="darkMode ? 'mode--dark' : ''">
    <div class="view-content" :inert="isModalOpen">
      <div class="table__wrap" :class="{'table__wrap--expanded': expanded}">
        <div class="test">
          <contents-table></contents-table>
        </div>
        <div @click="expanded = !expanded" class="expand">
          <div class="expand__caret"></div>
        </div>
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
      expanded: false,
    }
  },
  computed: {
    darkMode: function () {
      return this.$store.state.darkMode
    },
    isModalOpen: function () {
      return this.$store.state.modal.isOpen
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

.test
  padding: 40px 70px
  max-height: 90vh
  overflow: auto
  background-color: white
  border-bottom: 1px solid grey

.table__wrap
  width: 100%
  height: auto
  max-height: 90vh
  position: fixed
  top: 59px
  left: 0px
  z-index: 1
  overflow: visible
  transform: translate(0, -100%)
  transition: transform 1s ease-in-out
  display: flex
  justify-content: center

  &.table__wrap--expanded
    transform: translate(0, 0)

    .expand
      transform: translate(0, -23px)

      .expand__caret
        border-top-color: transparent
        border-bottom-color: grey
        bottom: 7px
        top: auto

  .expand
    position: absolute
    bottom: -22px
    display: block
    width: 50px
    height: 22px
    background-color: white
    border-bottom-right-radius: 10px
    border-bottom-left-radius: 10px
    z-index: 10
    transform: translate(0, 0)
    transition: transform 1s ease-in-out

    .expand__caret
      position: absolute 
      top: 7px
      right: 16px
      content: ''
      width: 0
      height: 0
      display: inline-block
      border: 8px solid transparent
      border-top-color: grey

.view-wrap
  .view-content
    min-height: 90vh

</style>