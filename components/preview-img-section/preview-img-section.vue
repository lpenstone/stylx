<template>
  <div>
    <h4>Image Section</h4>
    <div class="margin-top--30">
      <x-img-section ref="demo" :as="currentAs" :size="currentSize" :screen="currentScreen">
        <img ref="demoImg" class="background" :src="currentSrc">
        <p class="h3">This is an image section</p>
        <p>Use sections to organize your content.</p>
        <p>sections typically span the width of the page.</p>
        <p>Add any content within a section.</p>
      </x-img-section>
    </div>
    <x-card size="sm" class="margin-top--20">
      <h5>Attributes</h5>
      <div class="margin-top--20">
        <x-tag as="secondary">as</x-tag>
        <div class="margin-top--10">
          <strong>default:</strong> <x-tag>standard</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values:</strong>
          <x-button size="sm" @click="setAs('standard')" :selected="currentAs === 'standard'">standard</x-button>
          <x-button size="sm" @click="setAs('fixed')" :selected="currentAs === 'fixed'">fixed</x-button>
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
        <x-tag as="secondary">screen</x-tag>
        <div class="margin-top--10">
          <strong>default: </strong> <x-tag>0.2</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values: </strong>
          <x-button size="sm" @click="setScreen('0')" :selected="currentScreen === '0'">0</x-button>
          <x-button size="sm" @click="setScreen('0.1')" :selected="currentScreen === '0.1'">0.1</x-button>
          <x-button size="sm" @click="setScreen('0.2')" :selected="currentScreen === '0.2'">0.2</x-button>
          <x-button size="sm" @click="setScreen('0.3')" :selected="currentScreen === '0.3'">0.3</x-button>
          <x-button size="sm" @click="setScreen('0.4')" :selected="currentScreen === '0.4'">0.4</x-button>
          <x-button size="sm" @click="setScreen('0.5')" :selected="currentScreen === '0.5'">0.5</x-button>
        </div>
      </div>
      <div class="margin-top--20">
        <x-tag as="secondary">name</x-tag> <em>*required</em>
        <x-element size="sm" class="margin-top--10">
          <x-form>
            <x-form-input name="name-text" size="sm" @model="setName($event)" as=text :placeholder="currentName"></x-form-input>
          </x-form>
        </x-element>
        <p class="margin-top--10">Choose a unique name for your section. No spaces, use hyphens.</p>  
      </div>
      <div class="margin-top--30">
        <h5>Children</h5>
        <p>You must include an <span class="code-text">img</span> tag with the <span class="code-text">src</span> of the image you want as the background. It can be an image off the internet or one from your project.</p>
      </div>
      <div class="margin-top--20">
        <x-tag as="secondary">img src</x-tag> <em>*required</em>
        <x-element size="sm" class="margin-top--10">
          <x-form>
            <x-form-input name="src-text" size="sm" @model="setSrc($event)" as=text :placeholder="currentSrc"></x-form-input>
          </x-form>
        </x-element>
      </div>
    </x-card>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-img-section
        <span v-if="currentAs !== defaults.as">as="{{currentAs}}"</span>
        <span v-if="currentSize !== defaults.size">size="{{currentSize}}"</span>
        <span v-if="currentScreen !== defaults.screen">screen="{{currentScreen}}"</span>
        name="{{currentName}}"&gt;<br>
        &nbsp;&nbsp;&lt;img class="background" src="{{currentSrc}}"&gt;<br>
        &nbsp;&nbsp;&lt;!-- Your content --&gt;<br>
        &lt;/x-img-section&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-section',
  data () {
    return {
      defaults: {
        as: 'standard',
        size: 'md',
        screen: '0.2'
      },
      currentAs: 'standard',
      currentSize: 'md',
      currentScreen: '0.2',
      currentName: 'unique-name',
      currentSrc: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b'
    }
  },
  methods: {
    setAs: function (value) {
      this.currentAs = value
    },
    setSize: function (value) {
      this.currentSize = value
    },
    setScreen: function (value) {
      this.currentScreen = value
    },
    setName: function (value) {
      if (!value) {
        this.currentName = 'unique-name'
        return
      }
      this.currentName = value
    },
    setSrc: function (value) {
      if (!value) {
        this.currentSrc = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b'
        return
      }
      this.currentSrc = value

      const imgEl = this.$refs.demoImg
      imgEl.src = value

      this.$refs.demo.getImgSrc()
    }
  }
}
</script>
