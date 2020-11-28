<template>
  <div>
    <h4>Icon</h4>
    <div class="margin-top--30">
      <x-icon :as="currentAs"
        :size="currentSize"
        :icon="currentIcon"
        :brand="currentBrand"/>
    </div>
    <x-card size="sm" class="margin-top--20">
      <div>
        <h5>Attributes</h5>
        <x-tag as="secondary">as</x-tag>
        <div class="margin-top--10">
          <strong>default:</strong> <x-tag>standard</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values:</strong>
          <x-button size="sm" @click="setAs('standard')" :selected="currentAs === 'standard'">standard</x-button>
          <x-button size="sm" @click="setAs('alt')" :selected="currentAs === 'alt'">alt</x-button>
          <x-button size="sm" @click="setAs('brand')" :selected="currentAs === 'brand'">brand</x-button>
          <x-button size="sm" @click="setAs('brand-alt')" :selected="currentAs === 'brand-alt'">brand-alt</x-button>
          <x-button size="sm" @click="setAs('secondary')" :selected="currentAs === 'secondary'">secondary</x-button>
          <x-button size="sm" @click="setAs('secondary-alt')" :selected="currentAs === 'secondary-alt'">secondary-alt</x-button>
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
          <x-button size="sm" @click="setIcon('tree')" :selected="currentIcon === 'tree'">tree</x-button>
          <x-button size="sm" @click="setIcon('cog')" :selected="currentIcon === 'cog'">cog</x-button>
          <x-button size="sm" @click="setIcon('phone')" :selected="currentIcon === 'phone'">phone</x-button>
          <x-button size="sm" @click="setIcon('bicycle')" :selected="currentIcon === 'bicycle'">bicycle</x-button>
          <x-button size="sm" @click="setIcon('clock')" :selected="currentIcon === 'clock'">clock</x-button>
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
          <x-button size="sm" @click="setBrand('dribbble')" :selected="currentBrand === 'dribbble'">dribbble</x-button>
          <x-link href="https://fontawesome.com/icons?d=gallery&s=brands&m=free" target="_blank">&amp; others...</x-link>
          <x-group size="sm" class="margin-top--10">
            <x-form>
              <x-form-input ref="brandInput" name="brand-text" size="sm" @model="setBrand($event)" as=text placeholder="other"></x-form-input>
            </x-form>
          </x-group>
          <p class="margin-top--10">You can include a brand from a long list by FontAwesome. <x-link href="https://fontawesome.com/icons?d=gallery&s=brands&m=free" target="_blank">View available brands</x-link></p>
        </div>
      </div>
    </x-card>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-icon 
          <span v-if="currentAs !== defaults.as">as="{{currentAs}}"</span>
          <span v-if="currentSize !== defaults.size">size="{{currentSize}}"</span>
          <span v-if="currentIcon">icon="{{currentIcon}}"</span>
          <span v-if="currentBrand">brand="{{currentBrand}}"</span>/&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-icon',
  data () {
    return {
      defaults: {
        as: 'standard',
        size: 'md'
      },
      currentAs: 'standard',
      currentSize: 'md',
      currentIcon: 'tree',
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
    }
  }
}
</script>
