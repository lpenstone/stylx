<template>
  <div>
    <x-section as="hero">
      <x-content class="text-align-center">
        <h1>Stylx Library</h1>
      </x-content>
    </x-section>
    <x-section as="standard">
      <x-content>
        <h2 class="margin--bottom-30">Table of Contents</h2>
        <x-grid cols="4">
          <x-grid-item>
            <h3 class="h5 margin--top-20">Elements</h3>
            <ul>
              <li><x-link as="plain" href="#button">Button</x-link></li>
              <li><x-link as="plain" href="#link">Link</x-link></li>
              <li><x-link as="plain" href="#accordion">Accordion</x-link></li>
              <li><x-link as="plain" href="#see-more">See more toggle</x-link></li>
              <li><x-link as="plain" href="#tag">Tag</x-link></li>
            </ul>
          </x-grid-item>
          <x-grid-item>
            <h3 class="h5">Layout</h3>
            <ul>
              <li><x-link as="plain" href="#section">Section</x-link></li>
              <li><x-link as="plain" href="#content">Content</x-link></li>
              <li><x-link as="plain" href="#group">Group</x-link></li>
              <li><x-link as="plain" href="#grid">Grid</x-link></li>
              <li><x-link as="plain" href="#grid">Card</x-link></li>
            </ul>
          </x-grid-item>
          <x-grid-item>
            <h3 class="h5 margin--top-20">Interactive</h3>
            <ul>
              <li><x-link as="plain" href="#carousel">Carousel</x-link></li>
              <li><x-link as="plain" href="#gallery">Gallery</x-link></li>
              <li><x-link as="plain" href="#modal">Modal</x-link></li>
            </ul>
          </x-grid-item>
          <x-grid-item>
            <h3 class="h5 margin--top-20">Forms</h3>
            <ul>
              <li><x-link as="plain" href="#form">Form</x-link></li>
              <li><x-link as="plain" href="#input">Form Input (text, email, password, number)</x-link></li>
              <li><x-link as="plain" href="#groups">Form Groups (radio buttons, checkboxes, select dropdown)</x-link></li>
            </ul>
          </x-grid-item>
          <x-grid-item>
            <h3 class="h5 margin--top-20">Specialty</h3>
            <ul>
              <li><x-link as="plain" href="#nav-bar">Nav bar</x-link></li>
              <li><x-link as="plain" href="#mode-toggle">Light/dark mode toggle</x-link></li>
              <li><x-link as="plain" href="#map">Map</x-link></li>
            </ul>
          </x-grid-item>
        </x-grid>
      </x-content>
    </x-section>
    <x-section as="alt">
      <x-content>
        <h3 class="text-align-center margin--bottom-30">Elements</h3>
        <x-card as="shadow" id="button">
          <preview-button></preview-button>
        </x-card>
        <x-card as="shadow" id="link" class="margin--top-30">
          <preview-link></preview-link>
        </x-card>
        <x-card as="shadow" id="accordion" class="margin--top-30">
          <preview-accordion></preview-accordion>
        </x-card>
        <x-card as="shadow" id="see-more" class="margin--top-30">
          <preview-see-more></preview-see-more>
        </x-card>
        <x-card as="shadow" id="tag" class="margin--top-30">
          <preview-tag></preview-tag>
        </x-card>
      </x-content>
    </x-section>
    <x-section>
      <x-content>
        <h3 class="text-align-center margin--bottom-30">Layout</h3>
        <x-card as="shadow" id="button">
          <preview-button></preview-button>
        </x-card>
      </x-content>
    </x-section>
    <x-section as="alt">
      <x-content>
        <h3 class="text-align-center margin--bottom-30">Interactive</h3>
        <x-card as="shadow" id="gallery">
          <preview-gallery></preview-gallery>
        </x-card>
      </x-content>
    </x-section>
  </div>
</template>

<script>
import previewButton from '../components/preview-button/preview-button'
import previewLink from '../components/preview-link/preview-link'
import previewAccordion from '../components/preview-accordion/preview-accordion'
import previewTag from '../components/preview-tag/preview-tag'
import previewGallery from '../components/preview-gallery/preview-gallery'
import previewSeeMore from '../components/preview-see-more/preview-see-more'

export default {
  name: 'docs',
  components: {
    'preview-button': previewButton,
    'preview-link': previewLink,
    'preview-see-more': previewSeeMore,
    'preview-tag': previewTag,
    'preview-accordion': previewAccordion,
    'preview-gallery': previewGallery
  },
  data () {
    return {}
  }
}
</script>
