<template>
  <div>
    <h4>Card</h4>
    <div class="margin-top--30">
      <x-group size="md">
        <x-card :as="currentAs" :size="currentSize">
          <p class="h3">This is a card</p>
          <p>A card will provide a styled envelope around your content.</p>
          <p>Use it to provide depth and organization to your layouts.</p>
          <p>Add any content within a card.</p>
        </x-card>
      </x-group>
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
          <x-button size="sm" @click="setAs('shadow')" :selected="currentAs === 'shadow'">shadow</x-button>
          <x-button size="sm" @click="setAs('browser')" :selected="currentAs === 'browser'">browser</x-button>
          <x-button size="sm" @click="setAs('browser-shadow')" :selected="currentAs === 'browser-shadow'">browser-shadow</x-button>
          <x-button size="sm" @click="setAs('phone')" :selected="currentAs === 'phone'">phone</x-button>
          <x-button size="sm" @click="setAs('phone-shadow')" :selected="currentAs === 'phone-shadow'">phone-shadow</x-button>
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
        &lt;x-card
        <span v-if="currentAs !== defaults.as">as="{{currentAs}}"</span>
        <span v-if="currentSize !== defaults.size">size="{{currentSize}}"</span>&gt;<br>
        &nbsp;&nbsp;&lt;!-- Your content --&gt;<br>
        &lt;/x-card&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-card',
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
