<template>
  <div>
    <div class="expand__wrap" :class="[{'expand__wrap--expanded': expanded}, {'expand__wrap--lowered': showTableContent}]">
      <div @click="expanded = false" class="screen"></div>
      <div class="contents__wrap">
        <x-section size="sm">
          <x-content>
            <contents-table @clicked="expanded = false"></contents-table>
          </x-content>
        </x-section>
      </div>
      <x-button as="plain" @click="expanded = !expanded" class="expand__btn">
        <div class="expand__caret"></div>
      </x-button>
    </div>
    <x-section size="lg" as="hero">
      <x-content class="text-align--center">
        <x-group as="center" size="md">
          <h1 class="margin-bottom--20">Stylx Library</h1>
          <p>Style and preview the Stylx elements within this library.</p>
          <p>Copy the resulting code into your project.</p>
          <x-card as="shadow" class="margin-top--40 text-align--center">
            <p>Preview elements are displayed with Stylx default colors</p>
            <div class="color-preview color-preview--brand">#DE00AA</div><div class="color-preview color-preview--secondary">#0059DE</div>
          </x-card>
        </x-group>
      </x-content>
    </x-section>
    <x-section as="standard">
      <x-content>
        <h2 class="visually-hidden">Table of Contents</h2>
        <contents-table/>
      </x-content>
    </x-section>
    <x-section id="content" size="lg" as="alt">
      <x-content>
        <h3 class="text-align--center margin-bottom--30">Elements</h3>
        <x-card as="shadow" id="button">
          <preview-button/>
        </x-card>
        <x-card as="shadow" id="link" class="margin-top--30">
          <preview-link/>
        </x-card>
        <x-card as="shadow" id="icon" class="margin-top--30">
          <preview-icon/>
        </x-card>
        <x-card as="shadow" id="combo" class="margin-top--30">
          <preview-combo/>
        </x-card>
        <x-card as="shadow" id="icon-combo" class="margin-top--30">
          <preview-icon-combo/>
        </x-card>
        <x-card as="shadow" id="accordion" class="margin-top--30">
          <preview-accordion/>
        </x-card>
        <x-card as="shadow" id="see-more" class="margin-top--30">
          <preview-see-more/>
        </x-card>
        <x-card as="shadow" id="tag" class="margin-top--30">
          <preview-tag/>
        </x-card>
      </x-content>
    </x-section>
    <x-section size="lg">
      <x-content>
        <h3 class="text-align--center margin-bottom--30">Layout</h3>
        <x-card as="shadow" id="section">
          <preview-section/>
        </x-card>
        <x-card as="shadow" id="img-section" class="margin-top--30">
          <preview-img-section/>
        </x-card>
        <x-card as="shadow" id="content" class="margin-top--30">
          Content
        </x-card>
        <x-card as="shadow" id="group" class="margin-top--30">
          <preview-group/>
        </x-card>
        <x-card as="shadow" id="grid" class="margin-top--30">
          <preview-grid/>
        </x-card>
        <x-card as="shadow" id="card" class="margin-top--30">
          <preview-card/>
        </x-card>
        <x-card as="shadow" id="device" class="margin-top--30">
          <preview-device/>
        </x-card>
      </x-content>
    </x-section>
    <x-section size="lg" as="alt">
      <x-content>
        <h3 class="text-align--center margin-bottom--30">Interactive</h3>
        <x-card as="shadow" id="carousel" >
          <preview-carousel/>
        </x-card>
        <x-card as="shadow" id="modal" class="margin-top--30">
          <preview-modal/>
        </x-card>
        <x-card as="shadow" id="gallery" class="margin-top--30">
          <preview-gallery/>
        </x-card>
      </x-content>
    </x-section>
    <x-section size="lg">
      <x-content>
        <h3 class="text-align--center margin-bottom--30">Forms</h3>
        <x-card as="shadow" id="form" >
          <preview-form/>
        </x-card>
        <x-card as="shadow" id="input" class="margin-top--30">
          <preview-form-input/>
        </x-card>
        <x-card as="shadow" id="groups" class="margin-top--30">
          <preview-form-group/>
        </x-card>
        <x-card as="shadow" id="sample-form" class="margin-top--30">
          <preview-form-sample/>
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
    <x-section size="lg">
      <x-content>
        <h3 class="text-align--center margin-bottom--30">General Styles</h3>
        <x-card as="shadow" id="general" >
          General tags
        </x-card>
      </x-content>
    </x-section>
  </div>
</template>

<script>
import contentsTable from '../components/contents-table/contents-table'
import previewButton from '../components/preview-button/preview-button'
import previewCard from '../components/preview-card/preview-card'
import previewDevice from '../components/preview-device/preview-device'
import previewSection from '../components/preview-section/preview-section'
import previewForm from '../components/preview-form/preview-form'
import previewFormInput from '../components/preview-form-input/preview-form-input'
import previewFormGroup from '../components/preview-form-group/preview-form-group'
import previewFormSample from '../components/preview-form-sample/preview-form-sample'
import previewGroup from '../components/preview-group/preview-group'
import previewImgSection from '../components/preview-img-section/preview-img-section'
import previewLink from '../components/preview-link/preview-link'
import previewAccordion from '../components/preview-accordion/preview-accordion'
import previewCarousel from '../components/preview-carousel/preview-carousel'
import previewTag from '../components/preview-tag/preview-tag'
import previewIcon from '../components/preview-icon/preview-icon'
import previewGallery from '../components/preview-gallery/preview-gallery'
import previewGrid from '../components/preview-grid/preview-grid'
import previewModal from '../components/preview-modal/preview-modal'
import previewSeeMore from '../components/preview-see-more/preview-see-more'
import previewCombo from '../components/preview-combo/preview-combo'
import previewIconCombo from '../components/preview-icon-combo/preview-icon-combo'



export default {
  name: 'library',
  components: {
    'contents-table': contentsTable,
    'preview-button': previewButton,
    'preview-card': previewCard,
    'preview-device': previewDevice,
    'preview-link': previewLink,
    'preview-see-more': previewSeeMore,
    'preview-section': previewSection,
    'preview-group': previewGroup,
    'preview-form': previewForm,
    'preview-form-input': previewFormInput,
    'preview-form-group': previewFormGroup,
    'preview-form-sample': previewFormSample,
    'preview-img-section': previewImgSection,
    'preview-tag': previewTag,
    'preview-icon': previewIcon,
    'preview-icon-combo': previewIconCombo,
    'preview-accordion': previewAccordion,
    'preview-carousel': previewCarousel,
    'preview-gallery': previewGallery,
    'preview-grid': previewGrid,
    'preview-modal': previewModal,
    'preview-combo': previewCombo
  },
  data () {
    return {
      showTableContent: false,
      contentTop: 0,
      expanded: false,
    }
  },
  mounted: function () {
    this.getContentTop()
    this.setScroll()
    this.handleScroll()
  },
  methods: {
    handleScroll: function () {
      let scrollPosition = window.scrollY
      if (scrollPosition >= this.contentTop - 60) {
        if (!this.showTableContent) this.showTableContent = true
      } else {
        if (this.showTableContent) this.showTableContent = false
      }
    },
    getContentTop: function () {
      this.contentTop = document.getElementById('content').offsetTop
    },
    setScroll: function () {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.getContentTop)
    }
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

.expand__wrap
  width: 100%
  height: auto
  max-height: 90vh
  position: fixed
  top: 60px
  left: 0px
  z-index: 3
  overflow: visible
  transform: translate(0, -110%)
  transition: transform 0.6s ease-in-out
  display: flex
  justify-content: center

  &.expand__wrap--lowered
    transform: translate(0, -100%)

  &.expand__wrap--expanded
    transform: translate(0, 0)

    .expand__btn
      transform: translate(0, -23px) scaleY(-1)

    .screen
      display: block

  .expand__btn
    position: absolute
    bottom: -22px
    display: block
    width: 46px
    height: 22px
    background-color: white
    border-bottom-right-radius: 22px
    border-bottom-left-radius: 22px
    z-index: 10
    transform: translate(0, 0)
    transition: transform 0.6s ease-in-out
    box-shadow: none

    &:focus
      box-shadow: none

    .expand__caret
      position: absolute 
      top: 7px
      left: 15px
      content: ''
      width: 0
      height: 0
      display: inline-block
      border: 8px solid transparent
      border-top-color: grey

  .screen
    position: absolute 
    top: 0
    left: 0
    width: 100%
    height: 100vh
    display: none

.contents__wrap
  width: 100%
  max-height: 80vh
  overflow: auto
  background-color: white
  border-bottom: 1px solid $brand
</style>