<template>
  <div>
    <h4>Accordion</h4>
    <div class="margin-top--30">
      <x-accordion :as="currentAs" :size="currentSize" :label="currentLabel">
        <p>Accordion content</p>
      </x-accordion>
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
        <x-tag as="secondary">label</x-tag> <em>*required</em>
        <x-group size="sm" class="margin-top--10">
          <x-form>
            <x-form-input name="label-text" size="sm" @model="setLabel($event)" as=text :placeholder="currentLabel"></x-form-input>
          </x-form>
        </x-group>
        <p class="margin-top--10">The text you want presented on the collapsed accordion</p>  
      </div>
    </x-card>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-accordion
        <span v-if="currentAs !== defaults.as">as="{{currentAs}}"</span>
        <span v-if="currentSize !== defaults.size">size="{{currentSize}}"</span>
        label="{{currentLabel}}"&gt;<br>
        &nbsp;&nbsp;&lt;p&gt;Accordion content&lt;/p&gt;<br>
        &lt;/x-accordion&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-accordion',
  data () {
    return {
      defaults: {
        as: 'standard',
        size: 'md'
      },
      currentAs: 'standard',
      currentSize: 'md',
      currentLabel: 'Sample Accordion'
    }
  },
  methods: {
    setAs: function (value) {
      this.currentAs = value
    },
    setSize: function (value) {
      this.currentSize = value
    },
    setLabel: function (value) {
      if (!value) {
        this.currentLabel = 'Sample Accordion'
        return
      }
      this.currentLabel = value
    }
  }
}
</script>
