<template>
  <div>
    <h4>Group</h4>
    <div class="margin-top--30">
      <x-group :as="currentAs" :size="currentSize">
        <p class="h3">This is a group</p>
        <p>A group allows you to constrain the maximum width of its contents. Often used to keep a long strings of text from spanning the width of the screen. A <x-link href="#card">card</x-link> is frequently nested within a group.</p>
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
          <x-button size="sm" @click="setAs('center')" :selected="currentAs === 'center'">center</x-button>
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
        &lt;x-group
        <span v-if="currentAs !== defaults.as">as="{{currentAs}}"</span>
        <span v-if="currentSize !== defaults.size">size="{{currentSize}}"</span>&gt;<br>
        &nbsp;&nbsp;&lt;!-- Your content --&gt;<br>
        &lt;/x-group&gt;
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
