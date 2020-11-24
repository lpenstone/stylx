<template>
  <div>
    <h4>Button</h4>
    <div class="margin--top-30">
      <x-button :as="currentAs" :size="currentSize">{{currentText}}</x-button>
    </div>
    <x-card size="sm" class="margin--top-20">
      <h5>Attributes</h5>
      <div class="margin--top-20">
        <x-tag as="secondary">as</x-tag>
        <div class="margin--top-10">
          <strong>default:</strong> <x-tag>standard</x-tag>
        </div>
        <div class="margin--top-10">
          <strong>values:</strong>
          <x-button size="sm" @click="setAs('standard'); setText();" :selected="currentAs === 'standard'">standard</x-button>
          <x-button size="sm" @click="setAs('hollow'); setText();" :selected="currentAs === 'hollow'">hollow</x-button>
          <x-button size="sm" @click="setAs('link'); setText();" :selected="currentAs === 'link'">link</x-button>
          <x-button size="sm" @click="setAs('link-alt'); setText();" :selected="currentAs === 'link-alt'">link-alt</x-button>
          <x-button size="sm" @click="setAs('plain'); setText();" :selected="currentAs === 'plain'">plain</x-button>
          <x-button size="sm" @click="setAs('icon'); setIcon();" :selected="currentAs === 'icon'">icon</x-button>
        </div>
      </div>
      <div class="margin--top-30">
        <x-tag as="secondary">size</x-tag>
        <div class="margin--top-10">
          <strong>default: </strong> <x-tag>md</x-tag>
        </div>
        <div class="margin--top-10">
          <strong>values: </strong>
          <x-button size="sm" @click="setSize('sm')" :selected="currentSize === 'sm'">sm</x-button>
          <x-button size="sm" @click="setSize('md')" :selected="currentSize === 'md'">md</x-button>
          <x-button size="sm" @click="setSize('lg')" :selected="currentSize === 'lg'">lg</x-button>
        </div>
      </div>
      <div class="margin--top-30">
        <x-tag as="secondary">@click</x-tag>
        <p class="margin--top-10">The resulting action when your button gets clicked.</p>
      </div>
    </x-card>
    <div class="margin--top-20">
      <h5>Code</h5>
      <x-code class="margin--top-10">
        &lt;x-button as="{{currentAs}}" size="{{currentSize}}" @click=""&gt;{{currentText}}&lt;/x-button&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-button',
  data () {
    return {
      currentAs: 'standard',
      currentSize: 'md',
      currentText: 'Sample Button'
    }
  },
  methods: {
    setAs: function (value) {
      this.currentAs = value
    },
    setSize: function (value) {
      this.currentSize = value
    },
    setIcon: function () {
      this.currentText = '👍'
    },
    setText: function () {
      this.currentText = 'Sample Button'
    }
  }
}
</script>
