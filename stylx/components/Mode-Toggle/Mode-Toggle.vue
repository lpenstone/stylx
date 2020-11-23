<template>
  <x-button as="icon" :aria-label="darkMode ? 'view light mode': 'view dark mode'" @click="toggleMode()">
    <span v-if="darkMode"><i class="fas fa-sun"></i></span>
    <span v-else><i class="fas fa-moon"></i></span>
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