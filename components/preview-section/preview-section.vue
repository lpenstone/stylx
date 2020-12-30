<template>
  <div>
    <h4>Section</h4>
    <div class="margin-top--30">
      <x-section :as="currentAs" :size="currentSize" :swoosh="currentSwoosh" :wave="currentWave" :top="currentTop">
        <p class="h3">This is a section</p>
        <p>Use sections to organize your content.</p>
        <p>sections typically span the width of the page.</p>
        <p>Add any content within a section.</p>
      </x-section>
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
          <x-button size="sm" @click="setAs('hero')" :selected="currentAs === 'hero'">hero</x-button>
          <x-button size="sm" @click="setAs('alt')" :selected="currentAs === 'alt'">alt</x-button>
          <x-button size="sm" @click="setAs('dark')" :selected="currentAs === 'dark'">dark</x-button>
          <x-button size="sm" @click="setAs('brand-light')" :selected="currentAs === 'brand-light'">brand-light</x-button>
          <x-button size="sm" @click="setAs('brand-dark')" :selected="currentAs === 'brand-dark'">brand-dark</x-button>
          <x-button size="sm" @click="setAs('secondary-light')" :selected="currentAs === 'secondary-light'">secondary-light</x-button>
          <x-button size="sm" @click="setAs('secondary-dark')" :selected="currentAs === 'secondary-dark'">secondary-dark</x-button>
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
        <x-tag as="secondary">swoosh</x-tag>
        <div class="margin-top--10">
          <strong>default: </strong> <x-tag>none</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values: </strong>
          <x-button size="sm" @click="setSwoosh('')" :selected="currentSwoosh === ''">none</x-button>
          <x-button size="sm" @click="setSwoosh('top')" :selected="currentSwoosh === 'top'">top</x-button>
          <x-button size="sm" @click="setSwoosh('bottom')" :selected="currentSwoosh === 'bottom'">bottom</x-button>
        </div>
      </div>
      <div class="margin-top--30">
        <x-tag as="secondary">wave</x-tag>
        <div class="margin-top--10">
          <strong>default: </strong> <x-tag>none</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values: </strong>
          <x-button size="sm" @click="setWave('')" :selected="currentWave === ''">none</x-button>
          <x-button size="sm" @click="setWave('top')" :selected="currentWave === 'top'">top</x-button>
          <x-button size="sm" @click="setWave('bottom')" :selected="currentWave === 'bottom'">bottom</x-button>
        </div>
      </div>
      <div class="margin-top--20">
        <x-tag as="secondary">top</x-tag>
        <x-group size="sm" class="margin-top--10">
          <x-form-group
            @model="setTop($event)"
            as="checkbox"
            label="Add additional padding to the top of the section"
            name="top-input"
            required>
            <x-form-group-option name="top" label="top"/>
          </x-form-group>
        </x-group>
      </div>
    </x-card>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-section<span v-if="currentAs !== defaults.as"> as="{{currentAs}}"</span><span v-if="currentSwoosh !== defaults.swoosh"> swoosh="{{currentSwoosh}}"</span><span v-if="currentWave !== defaults.wave"> wave="{{currentWave}}"</span><span v-if="currentSize !== defaults.size"> size="{{currentSize}}"</span><span v-if="currentTop"> top</span>&gt;<br>
        &nbsp;&nbsp;&lt;!-- Your content --&gt;<br>
        &lt;/x-section&gt;
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
        wave: '',
        swoosh: ''
      },
      currentAs: 'hero',
      currentSize: 'md',
      currentWave: '',
      currentSwoosh: '',
      currentTop: false
    }
  },
  methods: {
    setAs: function (value) {
      this.currentAs = value
    },
    setSize: function (value) {
      this.currentSize = value
    },
    setSwoosh: function (value) {
      this.currentSwoosh = value
    },
    setWave: function (value) {
      this.currentWave = value
    },
    setTop: function (array) {
      this.currentTop = array.indexOf('top') > -1
    }
  }
}
</script>
