<template>
  <div>
    <h4>Link</h4>
    <div class="margin-top--30">
      <x-link :as="currentAs" :size="currentSize" href="https://stylx.com" target="_blank" :brand="currentBrand" :icon="currentIcon">{{hideText ? '' : currentText}}</x-link>
    </div>
    <x-card size="sm" class="margin-top--20">
      <div>
        <h5>Link text</h5>
        <x-group size="sm">
          <x-form-input @model="currentText = $event" name="link-text" as=text :placeholder="currentText"/>
        </x-group>
      </div>
      <div class="margin-top--30">
        <h5>Attributes</h5>
        <x-tag as="secondary">href</x-tag> <em>*required</em>
        <div class="margin-top--10">
          <p>The URL that you're linking to.</p>
          <p>Also supports the Vue :to="{}" attribute.</p>
        </div>
      </div>
      <div class="margin-top--30">
        <x-tag as="secondary">as</x-tag>
        <div class="margin-top--10">
          <strong>default:</strong> <x-tag>link</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values:</strong>
          <x-button size="sm" @click="setAs('link'); setText();" :selected="currentAs === 'link'">link</x-button>
          <x-button size="sm" @click="setAs('link-alt'); setText();" :selected="currentAs === 'link-alt'">link-alt</x-button>
          <x-button size="sm" @click="setAs('standard'); setText();" :selected="currentAs === 'standard'">standard</x-button>
          <x-button size="sm" @click="setAs('hollow'); setText();" :selected="currentAs === 'hollow'">hollow</x-button>
          <x-button size="sm" @click="setAs('plain'); setText();" :selected="currentAs === 'plain'">plain</x-button>
          <x-button size="sm" @click="setAs('icon'); clearText();" :selected="currentAs === 'icon'">icon</x-button>
        </div>
      </div>
      <div class="margin-top--30">
        <x-tag as="secondary">size</x-tag>
        <div class="margin-top--10">
          <strong>default: </strong> <x-tag>md</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values: </strong>
          <x-button size="sm" @click="setSize('sm')" :selected="currentSize === 'sm'">sm</x-button>
          <x-button size="sm" @click="setSize('md')" :selected="currentSize === 'md'">md</x-button>
          <x-button size="sm" @click="setSize('lg')" :selected="currentSize === 'lg'">lg</x-button>
        </div>
      </div>
      <div class="margin-top--30">
        <x-tag as="secondary">icon</x-tag>
        <div class="margin-top--10">
          <strong>values: </strong>
          <x-button size="sm" @click="setIcon('')" :selected="currentIcon === ''">none</x-button>
          <x-button size="sm" @click="setIcon('sun')" :selected="currentIcon === 'sun'">sun</x-button>
          <x-button size="sm" @click="setIcon('comment')" :selected="currentIcon === 'comment'">comment</x-button>
          <x-button size="sm" @click="setIcon('download')" :selected="currentIcon === 'download'">download</x-button>
          <x-link href="https://fontawesome.com/icons?d=gallery&s=regular,solid&m=free" target="_blank"> &amp; others...</x-link>
          <x-group size="sm" class="margin-top--10">
            <x-form-input ref="iconInput" name="icon-text" size="sm" @model="setIcon($event)" as=text placeholder="other"/>
          </x-group>
          <p class="margin-top--10">You can include an icon from a long list by FontAwesome. <x-link href="https://fontawesome.com/icons?d=gallery&s=regular,solid&m=free" target="_blank">View available icons</x-link></p>
        </div>
      </div>
      <div class="margin-top--30">
        <x-tag as="secondary">brand</x-tag>
        <div class="margin-top--10">
          <strong>values: </strong>
          <x-button size="sm" @click="setBrand('')" :selected="currentBrand === ''">none</x-button>
          <x-button size="sm" @click="setBrand('github')" :selected="currentBrand === 'github'">github</x-button>
          <x-button size="sm" @click="setBrand('twitter')" :selected="currentBrand === 'twitter'">twitter</x-button>
          <x-button size="sm" @click="setBrand('youtube')" :selected="currentBrand === 'youtube'">youtube</x-button>
          <x-link href="https://fontawesome.com/icons?d=gallery&s=brands&m=free" target="_blank">&amp; others...</x-link>
          <x-group size="sm" class="margin-top--10">
            <x-form-input ref="brandInput" name="brand-text" size="sm" @model="setBrand($event)" as=text placeholder="other"/>
          </x-group>
          <p class="margin-top--10">You can include a brand from a long list by FontAwesome. <x-link href="https://fontawesome.com/icons?d=gallery&s=brands&m=free" target="_blank">View available brands</x-link></p>
        </div>
      </div>
      <div class="margin-top--30">
        <strong>Other: </strong>
        <p>Use any standard HTML link attributes.</p>
        <x-button as="secondary" size="sm" @click="toggle('target')" :selected="!!optional.target">target</x-button>
        <x-button as="secondary" size="sm" @click="toggle('title')" :selected="!!optional.title">title</x-button>
        <x-button as="secondary" size="sm" @click="toggle('name')" :selected="!!optional.name">name</x-button>
        <x-link size="sm" href="https://www.w3schools.com/tags/tag_a.asp" target="_blank">Other</x-link>
      </div>
    </x-card>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-link
        href=""
        <span v-if="currentAs !== defaults.as">as="{{currentAs}}"</span>
        <span v-if="currentSize !== defaults.size">size="{{currentSize}}"</span>
        <span v-if="currentIcon">icon="{{currentIcon}}"</span>
        <span v-if="currentBrand">brand="{{currentBrand}}"</span>
        {{optional.target}}
        {{optional.title}}
        {{optional.name}}&gt;{{currentText}}&lt;/x-link&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-link',
  data () {
    return {
      defaults: {
        as: 'link',
        size: 'md'
      },
      currentAs: 'link',
      currentSize: 'md',
      currentText: 'Sample Link',
      hideText: false,
      currentIcon: '',
      currentBrand: '',
      optional: {
        name: '',
        target: '',
        title: ''
      }
    }
  },
  methods: {
    setAs: function (value) {
      this.currentAs = value
    },
    setSize: function (value) {
      this.currentSize = value
    },
    setIcon: function (value) {
      if (value) this.$refs.brandInput.setInput('')
      this.$refs.iconInput.setInput(value)
      this.currentIcon = value
    },
    setBrand: function (value) {
      if (value) this.$refs.iconInput.setInput('')
      this.$refs.brandInput.setInput(value)
      this.currentBrand = value
    },
    clearText: function () {
      this.hideText = true
      if (!this.currentIcon && !this.currentBrand) this.currentIcon = 'sun'
    },
    setText: function () {
      this.hideText = false
    },
    toggle: function (key) {
      if (this.optional[key]) {
        this.optional[key] = ''
      } else {
        this.optional[key] = key === 'target' ? `${key}="_blank"` : `${key}=""`
      }
    }
  }
}
</script>
