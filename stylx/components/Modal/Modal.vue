<template>
  <div class="modal-button__wrap">
    <div v-if="isModalOpen && name === modalName" ref="modal" role="dialog" :aria-labelledby="'labelID'" class="modal">
      <div @click="isCloseable && closeModal()" class="modal__screen"></div>
      <div class="modal__wrap" :class="'modal__wrap--' + size">
        <div class="modal__box">
          <div class="modal__close">
            <x-button v-if="isCloseable" as="icon" @clicked="closeModal()" aria-label="close">x</x-button>
          </div>
          <div class="modal__content">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <x-button v-if="label" :as="buttonAs" :size="buttonSize" @clicked="openModal(name)">{{label}}</x-button>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    as: {
      type: String,
      default: 'standard'
    },
    size: {
      type: String,
      default: 'md'
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String
    },
    buttonAs: {
      type: String,
      default: 'link'
    },
    buttonSize: {
      type: String,
      default: 'md'
    }
  },
  data () {
    return {
      activeField: null
    }
  },
  created: function () {
    if (this.isCloseable && process.browser) {
      window.addEventListener('keydown', this.escape)
    }
  },
  computed: {
    isCloseable: function () {
      return this.as !== 'noclose'
    },
    isModalOpen: function () {
      return this.$store.state.modal.isOpen
    },
    modalName: function () {
      return this.$store.state.modal.name
    }
  },
  methods: {
    openModal: function (name) {
      if (this.$store.state.modal.isOpen) return
      this.$store.commit('openModal', name)
      this.activeField = document.activeElement
      this.$nextTick(() => {
        const inputField = this.$refs.modal.querySelector('input')
        const button = this.$refs.modal.querySelectorAll('button')[1] // skip the close button
        if (inputField) {
          inputField.focus()
        } else if (button) {
          button.focus()
        }
      })
    },
    closeModal: function () {
      this.$store.commit('closeModal')
      setTimeout(() => {
        if (this.activeField) {
          this.activeField.focus()
          this.activeField = null
        }
      }, 100)
    },
    escape: function (e) {
      if (e.key === 'Escape') {
        this.closeModal()
      }
    }
  },
  destroyed: function () {
    if (process.browser) {
      window.removeEventListener('keydown', this.escape)
    }
  }
}
</script>
<style scoped lang="stylus" src="./Modal.styl" >