<template>
  <div>
    <h4>See more toggle</h4>
    <div class="margin-top--30">
      <x-see-more :as="currentAs" :size="currentSize">
        <p>Hidden/revealed content</p>
      </x-see-more>
    </div>
    <x-card size="sm" class="margin-top--20">
      <h5>Attributes</h5>
      <div class="margin-top--20">
        <x-tag as="secondary">as</x-tag>
        <div class="margin-top--10">
          <strong>default:</strong> <x-tag>link</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values:</strong>
          <x-button size="sm" @click="setAs('link')" :selected="currentAs === 'link'">link</x-button>
          <x-button size="sm" @click="setAs('link-alt')" :selected="currentAs === 'link-alt'">link-alt</x-button>
          <x-button size="sm" @click="setAs('standard')" :selected="currentAs === 'standard'">standard</x-button>
          <x-button size="sm" @click="setAs('hollow')" :selected="currentAs === 'hollow'">hollow</x-button>
          <x-button size="sm" @click="setAs('plain')" :selected="currentAs === 'plain'">plain</x-button>
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
      <div class="margin-top--20">
        <x-tag as="secondary">label</x-tag>
        <div class="margin-top--10">
          <strong>default: </strong> See more
          <p class="margin-top--10">The text you want displayed on the prompt</p>  
        </div>
      </div>
    </x-card>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-see-more as="{{currentAs}}" size="{{currentSize}}" label=""&gt;<br>
        &nbsp;&nbsp;&lt;p&gt;Hidden/revealed content&lt;/p&gt;<br>
        &lt;/x-see-more&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-accordion',
  data () {
    return {
      currentAs: 'link',
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
