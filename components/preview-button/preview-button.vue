<template>
  <div>
    <h4>Button</h4>
    <div class="margin-top--30">
      <x-button :as="currentAs"
        :size="currentSize"
        :icon="currentIcon"
        :brand="currentBrand">
        {{hideText ? '' : currentText}}
      </x-button>
    </div>
    <x-card size="sm" class="margin-top--20">
      <div>
        <h5>Button text</h5>
        <x-group size="sm">
          <x-form>
            <x-form-input @model="currentText = $event" name="button-text" as=text :placeholder="currentText"></x-form-input>
          </x-form>
        </x-group>
      </div>
      <div class="margin-top--30">
        <h5>Attributes</h5>
        <x-tag as="secondary">as</x-tag>
        <div class="margin-top--10">
          <strong>default:</strong> <x-tag>standard</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values:</strong>
          <x-button size="sm" @click="setAs('standard'); setText();" :selected="currentAs === 'standard'">standard</x-button>
          <x-button size="sm" @click="setAs('hollow'); setText();" :selected="currentAs === 'hollow'">hollow</x-button>
          <x-button size="sm" @click="setAs('link'); setText();" :selected="currentAs === 'link'">link</x-button>
          <x-button size="sm" @click="setAs('link-alt'); setText();" :selected="currentAs === 'link-alt'">link-alt</x-button>
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
            <x-form>
              <x-form-input ref="iconInput" name="icon-text" size="sm" @model="setIcon($event)" as=text placeholder="other"></x-form-input>
            </x-form>
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
            <x-form>
              <x-form-input ref="brandInput" name="brand-text" size="sm" @model="setBrand($event)" as=text placeholder="other"></x-form-input>
            </x-form>
          </x-group>
          <p class="margin-top--10">You can include a brand from a long list by FontAwesome. <x-link href="https://fontawesome.com/icons?d=gallery&s=brands&m=free" target="_blank">View available brands</x-link></p>
        </div>
      </div>
      <div class="margin-top--30">
        <x-tag as="secondary">@click</x-tag>
        <p class="margin-top--10">The resulting action when your button gets clicked.</p>
      </div>
    </x-card>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-button 
          <span v-if="currentAs !== defaults.as">as="{{currentAs}}"</span>
          <span v-if="currentSize !== defaults.size">size="{{currentSize}}"</span>
          <span v-if="currentIcon">icon="{{currentIcon}}"</span>
          <span v-if="currentBrand">brand="{{currentBrand}}"</span>
          @click=""&gt;{{currentText}}&lt;/x-button&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-button',
  data () {
    return {
      defaults: {
        as: 'standard',
        size: 'md'
      },
      currentAs: 'standard',
      currentSize: 'md',
      currentText: 'Sample Button',
      hideText: false,
      currentIcon: '',
      currentBrand: ''
    }
  },
  methods: {
    setAs: function (value) {
      this.currentAs = value
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
    setSize: function (value) {
      this.currentSize = value
    },
    clearText: function () {
      this.hideText = true
      if (!this.currentIcon && !this.currentBrand) this.currentIcon = 'sun'
    },
    setText: function () {
      this.hideText = false
    }
  }
}
</script>
