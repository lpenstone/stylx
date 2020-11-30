<template>
  <div>
    <h4>Combo</h4>
    <div class="margin-top--30">
      <x-combo :as="currentAs" :size="currentSize">
        <x-combo-img>
          <img src="~@/assets/images/sample3.png" alt="">
        </x-combo-img>
        <x-combo-text>
          <p><strong>This is a combo</strong></p>
          <p>Combine an image with text content.</p>
        </x-combo-text>
      </x-combo>
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
          <x-button size="sm" @click="setAs('standard-center')" :selected="currentAs === 'standard-center'">standard-center</x-button>
          <x-button size="sm" @click="setAs('rounded')" :selected="currentAs === 'rounded'">rounded</x-button>
          <x-button size="sm" @click="setAs('rounded-center')" :selected="currentAs === 'rounded-center'">rounded-center</x-button>
          <x-button size="sm" @click="setAs('circle')" :selected="currentAs === 'circle'">circle</x-button>
          <x-button size="sm" @click="setAs('circle-center')" :selected="currentAs === 'circle-center'">circle-center</x-button>
          <x-button size="sm" @click="setAs('card')" :selected="currentAs === 'card'">card</x-button>
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
    </x-card>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-combo
        <span v-if="currentAs !== defaults.as">as="{{currentAs}}"</span>
        <span v-if="currentSize !== defaults.size">size="{{currentSize}}"</span>&gt;<br>
        &nbsp;&nbsp;&lt;x-combo-img&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="" alt=""&gt;<br>
        &nbsp;&nbsp;&lt;/x-combo-img&gt;<br>
        &nbsp;&nbsp;&lt;x-combo-text&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Your content --&gt;<br>
        &nbsp;&nbsp;&lt;/x-combo-text&gt;<br>
        &lt;/x-combo&gt;
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
        size: 'md'
      },
      currentAs: 'standard',
      currentSize: 'md'
    }
  },
  methods: {
    setAs: function (value) {
      this.currentAs = value
    },
    setSize: function (value) {
      this.currentSize = value
    }
  }
}
</script>
