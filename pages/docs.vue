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
        <contents-table></contents-table>
      </x-content>
    </x-section>
    <x-section id="content" size="lg" as="alt">
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
          <preview-section></preview-section>
        </x-card>
        <x-card as="shadow" id="img-section" class="margin-top--30">
          <preview-img-section></preview-img-section>
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
          <preview-card></preview-card>
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
import contentsTable from '../components/contents-table/contents-table'
import previewButton from '../components/preview-button/preview-button'
import previewCard from '../components/preview-card/preview-card'
import previewSection from '../components/preview-section/preview-section'
import previewImgSection from '../components/preview-img-section/preview-img-section'
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
    'contents-table': contentsTable,
    'preview-button': previewButton,
    'preview-card': previewCard,
    'preview-link': previewLink,
    'preview-see-more': previewSeeMore,
    'preview-section': previewSection,
    'preview-img-section': previewImgSection,
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