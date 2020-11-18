import config from '../stylx.config.json'

export const state = () => ({
  config: config,
  darkMode: config.defaultDarkMode,
  isMenuOpen: false,
  modal: {
    isOpen: false,
    name: ''
  }
})

export const mutations = {
  toggleMode (state) {
    state.darkMode = !state.darkMode
  },
  toggleMenu (state, value) {
    if (value !== undefined) {
      state.isMenuOpen = value
      console.log(value)
    } else {
      state.isMenuOpen = !state.isMenuOpen
    }
  },
  openModal (state, name) {
    state.modal.isOpen = true
    state.modal.name = name
  },
  closeModal (state) {
    state.modal.isOpen = false
    state.modal.name = ''
  }
}