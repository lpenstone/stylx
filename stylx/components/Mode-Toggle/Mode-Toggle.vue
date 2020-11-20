<template>
  <x-button as="icon" :aria-label="darkMode ? 'view light mode': 'view dark mode'" @clicked="toggleMode()">
    <span v-if="darkMode">&#9728;</span>
    <span v-else>&#9790;</span>
  </x-button>
</template>

<script>
export default {
  name: 'Mode-Toggle',
  props: {
    as: {
      type: String,
      default: 'standard'
    }
  },
  data () {
    return {}
  },
  computed: {
    darkMode: function () {
      return this.$store.state.darkMode
    }
  },
  methods: {
    toggleMode: function () {
      this.$store.commit('toggleMode')
    }
  }
}
</script>