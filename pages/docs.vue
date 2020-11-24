<template>
  <div>
    <x-section size="lg" as="hero">
      <x-content class="text-align--center">
        <x-element as="center" size="md">
          <h1 class="margin-bottom--20">Stylx Library</h1>
          <p>Style and preview the Stylx elements within this library.</p>
          <p>Copy the resulting code into your project.</p>
          <x-card as="shadow" class="margin-top--40 text-align--center">
            <p>Preview elements are displayed with Stylx default colors</p>
            <div class="color-preview color-preview--brand">#DE00AA</div><div class="color-preview color-preview--secondary">#0059DE</div>
          </x-card>
        </x-element>
      </x-content>
    </x-section>
    <x-section as="standard">
      <x-content>
        <h2 class="visually-hidden">Table of Contents</h2>
        <x-grid cols="4">
          <x-grid-item>
            <h3 class="h5 margin-top--20">Elements</h3>
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
            <h3 class="h5 margin-top--20">Interactive</h3>
            <ul>
              <li><x-link as="plain" href="#carousel">Carousel</x-link></li>
              <li><x-link as="plain" href="#gallery">Gallery</x-link></li>
              <li><x-link as="plain" href="#modal">Modal</x-link></li>
            </ul>
          </x-grid-item>
          <x-grid-item>
            <h3 class="h5 margin-top--20">Forms</h3>
            <ul>
              <li><x-link as="plain" href="#form">Form</x-link></li>
              <li><x-link as="plain" href="#input">Form Input (text, email, password, number)</x-link></li>
              <li><x-link as="plain" href="#groups">Form Groups (radio buttons, checkboxes, select dropdown)</x-link></li>
            </ul>
          </x-grid-item>
          <x-grid-item>
            <h3 class="h5 margin-top--20">Specialty</h3>
            <ul>
              <li><x-link as="plain" href="#nav-bar">Nav bar</x-link></li>
              <li><x-link as="plain" href="#mode-toggle">Light/dark mode toggle</x-link></li>
              <li><x-link as="plain" href="#map">Map</x-link></li>
            </ul>
          </x-grid-item>
          <x-grid-item>
            <h3 class="h5 margin-top--20">General styles</h3>
            <ul>
              <li><x-link as="plain" id="margins" href="#nav-bar">Margins</x-link></li>
              <li><x-link as="plain" id="Titles" href="#mode-toggle">Titles</x-link></li>
              <li><x-link as="plain" id="Other" href="#map">Other</x-link></li>
            </ul>
          </x-grid-item>
          <x-grid-item>
            <h3 class="h5 margin-top--20">Credits</h3>
            <ul>
              <li><x-link as="plain" id="margins" href="#nav-bar">Demo photos</x-link></li>
              <li><x-link as="plain" id="margins" href="#nav-bar">Font Awesome</x-link></li>
              <li><x-link as="plain" id="margins" href="#nav-bar">Nuxt</x-link></li>
            </ul>
          </x-grid-item>
        </x-grid>
      </x-content>
    </x-section>
    <x-section size="lg" as="alt">
      <x-content>
        <h3 class="text-align--center margin-bottom--30">Elements</h3>
        <x-card as="shadow" id="button">
          <preview-button></preview-button>
        </x-card>
        <x-card as="shadow" id="link" class="margin-top--30">
          <preview-link></preview-link>
        </x-card>
        <x-card as="shadow" id="accordion" class="margin-top--30">
          <preview-accordion></preview-accordion>
        </x-card>
        <x-card as="shadow" id="see-more" class="margin-top--30">
          <preview-see-more></preview-see-more>
        </x-card>
        <x-card as="shadow" id="tag" class="margin-top--30">
          <preview-tag></preview-tag>
        </x-card>
      </x-content>
    </x-section>
    <x-section size="lg">
      <x-content>
        <h3 class="text-align--center margin-bottom--30">Layout</h3>
        <x-card as="shadow" id="section">
          Section
        </x-card>
        <x-card as="shadow" id="content" class="margin-top--30">
          Content
        </x-card>
        <x-card as="shadow" id="group" class="margin-top--30">
          Group
        </x-card>
        <x-card as="shadow" id="grid" class="margin-top--30">
          <preview-grid></preview-grid>
        </x-card>
        <x-card as="shadow" id="card" class="margin-top--30">
          Card
        </x-card>
      </x-content>
    </x-section>
    <x-section size="lg" as="alt">
      <x-content>
        <h3 class="text-align--center margin-bottom--30">Interactive</h3>
        <x-card as="shadow" id="carousel" >
          <preview-carousel></preview-carousel>
        </x-card>
        <x-card as="shadow" id="modal" class="margin-top--30">
          <preview-modal></preview-modal>
        </x-card>
        <x-card as="shadow" id="gallery" class="margin-top--30">
          <preview-gallery></preview-gallery>
        </x-card>
      </x-content>
    </x-section>
    <x-section size="lg">
      <x-content>
        <h3 class="text-align--center margin-bottom--30">Forms</h3>
        <x-card as="shadow" id="form" >
          Form
        </x-card>
        <x-card as="shadow" id="input" class="margin-top--30">
          Form inputs
        </x-card>
        <x-card as="shadow" id="groups" class="margin-top--30">
          Form groups
        </x-card>
      </x-content>
    </x-section>
    <x-section as="alt" size="lg">
      <x-content>
        <h3 class="text-align--center margin-bottom--30">Specialty</h3>
        <x-card as="shadow" id="mode-toggle" >
          Mode toggle
        </x-card>
        <x-card as="shadow" id="nav" class="margin-top--30">
          Nav bar
        </x-card>
        <x-card as="shadow" id="nav" class="margin-top--30">
          Map
        </x-card>
      </x-content>
    </x-section>
  </div>
</template>

<script>
import previewButton from '../components/preview-button/preview-button'
import previewLink from '../components/preview-link/preview-link'
import previewAccordion from '../components/preview-accordion/preview-accordion'
import previewCarousel from '../components/preview-carousel/preview-carousel'
import previewTag from '../components/preview-tag/preview-tag'
import previewGallery from '../components/preview-gallery/preview-gallery'
import previewGrid from '../components/preview-grid/preview-grid'
import previewModal from '../components/preview-modal/preview-modal'
import previewSeeMore from '../components/preview-see-more/preview-see-more'

export default {
  name: 'docs',
  components: {
    'preview-button': previewButton,
    'preview-link': previewLink,
    'preview-see-more': previewSeeMore,
    'preview-tag': previewTag,
    'preview-accordion': previewAccordion,
    'preview-carousel': previewCarousel,
    'preview-gallery': previewGallery,
    'preview-grid': previewGrid,
    'preview-modal': previewModal
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables'

.color-preview
  font-family: Consolas, Monaco, Lucida Console, Liberation Mono, Courier New, sans-serif
  position: relative
  display: inline-block
  line-height: 1.2em
  padding-left: 25px
  margin: 0 10px
  
  &:before
    position: absolute
    display: block
    content: ''
    width: 16px
    height: 16px
    left: 0px
    border: 1px solid $standard-xxdark
    border-radius: 3px

.color-preview--brand
  &:before
    background-color: $brand

.color-preview--secondary
  &:before
    background-color: $secondary

</style>