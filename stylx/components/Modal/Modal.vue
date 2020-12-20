<template>
  <div class="modal-button__wrap" :class="{'modal-button__wrap--none': !label && !isModalVisible}">
    <div v-if="isModalVisible"
      :ref="'modal' + name"
      role="dialog"
      class="modal">
      <div @click="isCloseable && closeModal()" class="modal__screen"></div>
      <div class="modal__wrap" :class="'modal__wrap--' + size">
        <div class="modal__box">
          <div class="modal__close">
            <x-button v-if="isCloseable" as="icon" @click="closeModal()" aria-label="close">x</x-button>
          </div>
          <div class="modal__content">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <x-button v-if="label" :as="buttonAs" :size="buttonSize" @click="openModal(name)">{{label}}</x-button>
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
      activeField: null,
      isShiftPressed: false,
      focusableEls: [],
      topFocusEl: null,
      bottomFocusEl: null
    }
  },
  created: function () {
    if (process.browser) {
      window.addEventListener('keyup', this.handleKeyup)
      window.addEventListener('keydown', this.handleKeydown)
    }
  },
  mounted: function () {
    if (this.as === 'open') {
      this.openModal(this.name)
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
    },
    isModalVisible: function () {
      return this.isModalOpen && this.name === this.modalName
    }
  },
  methods: {
    openModal: function (name) {
      if (this.$store.state.modal.isOpen) return
      this.$store.commit('openModal', name)
      this.activeField = document.activeElement
      this.$nextTick(() => {
        this.getFocusEls()
        if (this.focusableEls[1]) {
          this.focusableEls[1].focus()
        }
      })
    },
    getFocusEls: function () {
      if (!this.$refs.['modal' + this.name]) return
      this.focusableEls = this.$refs.['modal' + this.name].querySelectorAll('button, [href], input, select, textarea, select, textarea [tabindex]:not([tabindex="-1"])')
      this.topFocusEl = this.focusableEls[0]
      this.bottomFocusEl = this.focusableEls[this.focusableEls.length - 1]
    },
    handleKeydown: function (e) {
      switch(e.key) {
        case 'Escape':
          if (!this.isCloseable) return
          this.closeModal()
          break
        case 'Tab':
          if (this.isShiftPressed) {
            if (document.activeElement === this.topFocusEl) {
              setTimeout(() => {
                this.topFocusEl.focus()
              }, 150)
            }
          } else if (document.activeElement === this.bottomFocusEl) {
            setTimeout(() => {
              this.bottomFocusEl.focus()
            }, 150)
          }
          break
        case 'Shift':
          this.isShiftPressed = true
          break
        default:
          return
      }
    },
    handleKeyup: function (e) {
      if (e.key === 'Shift') {
        this.isShiftPressed = false
      }
    },
    closeModal: function () {
      this.$store.commit('closeModal')
      setTimeout(() => {
        if (this.activeField) {
          this.activeField.focus()
          this.activeField = null
        }
      }, 100)
    }
  },
  destroyed: function () {
    if (process.browser) {
      window.removeEventListener('keydown', this.handleKeydown)
      window.removeEventListener('keyup', this.handleKeyup)
    }
  }
}
</script>
<style scoped lang="stylus" src="./Modal.styl" >