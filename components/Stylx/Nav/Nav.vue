<template>
  <div>
    <nav class="nav" :class="{'nav--open': isMenuOpen}">
      <div class="nav__wrap">
        <div class="nav__content">
          <div class="nav__items nav__items--left">
            <div class="nav__item nav__item--logo">
              <router-link :to="{name: 'index'}" class="nav__item--logo-link">
                <slot name="logo">
                  <div class="heading--accent">{{name}}</div>
                </slot>
              </router-link>
            </div>
            <div class="nav__item nav__item--mobile-menu">
              <x-button as="icon" id="close" @clicked="toggleMenu">x</x-button>
              <x-button as="plain" id="menu" @clicked="toggleMenu">
                <i class="fas fa-bars"></i>
              </x-button>
            </div>
            <div class="nav__item nav__item--links">
              <slot name="links">
                <ul>
                  <li v-for="(route, name) in routes" v-bind:key="name">
                    <x-link
                      v-if="route.path !== '/' && route.path !== '/success'"
                      :to="{name: route.name}">
                      {{route.name | sanitize}}
                    </x-link>
                  </li>
                </ul>
              </slot>
            </div>
          </div>
          <div class="nav__items nav__items--right">
            <div class="nav__item nav__item--icons">
              <slot name="icons">
                <x-social></x-social>
              </slot>
              <x-mode-toggle v-if="allowModeToggle"></x-mode-toggle>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="nav__dummy-bar"></div>
  </div>
</template>

<script>
import Swipe from '@/components/Stylx/Swipe/Swipe'

export default {
  name: 'Nav',
  props: {
    as: {
      type: String,
      default: 'standard'
    }
  },
  components: {
    'x-swipe': Swipe
  },
  filters: {
    sanitize: function (value) {
      if (!value) return ''
      value = value.toString().replace('-',' ')
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  data () {
    return {
      routes: this.$router.options.routes,
      open: false
    }
  },
  computed: {
    name: function () {
      return this.$store.state.config.name
    },
    allowModeToggle: function () {
      return this.$store.state.config.allowModeToggle
    },
    isMenuOpen: function () {
      return this.$store.state.isMenuOpen
    }
  },
  methods: {
    toggleMenu: function () {
      this.$store.commit('toggleMenu')
    }
  }
}
</script>

<style scoped lang="stylus" src="./Nav.styl">