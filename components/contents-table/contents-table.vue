<template>
  <x-grid cols="4">
    <x-grid-item>
      <h3 class="h5 margin-top--20">Elements</h3>
      <ul>
        <li><x-link @click="clicked()" as="plain" href="#button">Button</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#link">Link</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#icon">Icon</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#combo">Combo</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#icon-combo">Icon combo</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#accordion">Accordion</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#see-more">See more toggle</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#tag">Tag</x-link></li>
      </ul>
    </x-grid-item>
    <x-grid-item>
      <h3 class="h5">Layout</h3>
      <ul>
        <li><x-link @click="clicked()" as="plain" href="#section">Section</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#img-section">Image Section</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#content">Content</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#group">Group</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#grid">Grid</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#card">Card</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#device">Device</x-link></li>
      </ul>
    </x-grid-item>
    <x-grid-item>
      <h3 class="h5 margin-top--20">Interactive</h3>
      <ul>
        <li><x-link @click="clicked()" as="plain" href="#carousel">Carousel</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#gallery">Gallery</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#modal">Modal</x-link></li>
      </ul>
    </x-grid-item>
    <x-grid-item>
      <h3 class="h5 margin-top--20">Forms</h3>
      <ul>
        <li><x-link @click="clicked()" as="plain" href="#form">Form</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#input">Form Input (text, email, password, number)</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#groups">Form Groups (radio buttons, checkboxes, select dropdown)</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#sample-form">Sample Form</x-link></li>
      </ul>
    </x-grid-item>
    <x-grid-item>
      <h3 class="h5 margin-top--20">Specialty</h3>
      <ul>
        <li><x-link @click="clicked()" as="plain" href="#nav-bar">Nav bar</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#mode-toggle">Light/dark mode toggle</x-link></li>
        <li><x-link @click="clicked()" as="plain" href="#map">Map</x-link></li>
      </ul>
    </x-grid-item>
    <x-grid-item>
      <h3 class="h5 margin-top--20">General styles</h3>
      <ul>
        <li><x-link @click="clicked()" as="plain" id="general" href="#icons">General tags</x-link></li>
        <li><x-link @click="clicked()" as="plain" id="margins" href="#nav-bar">Margins</x-link></li>
        <li><x-link @click="clicked()" as="plain" id="Titles" href="#mode-toggle">Titles</x-link></li>
        <li><x-link @click="clicked()" as="plain" id="Other" href="#map">Other</x-link></li>
      </ul>
    </x-grid-item>
    <x-grid-item>
      <h3 class="h5 margin-top--20">Credits</h3>
      <ul>
        <li><x-link @click="clicked()" as="plain" id="margins" href="#nav-bar">Demo photos</x-link></li>
        <li><x-link @click="clicked()" as="plain" id="margins" href="#nav-bar">Font Awesome</x-link></li>
        <li><x-link @click="clicked()" as="plain" id="margins" href="#nav-bar">Nuxt</x-link></li>
      </ul>
    </x-grid-item>
  </x-grid>
</template>

<script>
export default {
  name: 'contents-table',
  data () {
    return {}
  },
  methods: {
    clicked: function () {
      console.log('fdsnfjdks')
      this.$emit('clicked')
    }
  }
}
</script>
