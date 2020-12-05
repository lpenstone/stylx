<template>
  <div>
    <h4>Tag</h4>
    <div class="margin-top--30">
      <x-tag :as="currentAs">
        {{currentText}}
      </x-tag>
    </div>
    <x-card size="sm" class="margin-top--20">
      <div>
        <h5>Tag text</h5>
        <x-group size="sm">
          <x-form-input @model="currentText = $event" name="button-text" as=text :placeholder="currentText"/>
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
          <x-button size="sm" @click="setAs('standard')" :selected="currentAs === 'standard'">standard</x-button>
          <x-button size="sm" @click="setAs('hollow')" :selected="currentAs === 'hollow'">hollow</x-button>
          <x-button size="sm" @click="setAs('secondary')" :selected="currentAs === 'secondary'">secondary</x-button>
          <x-button size="sm" @click="setAs('green')" :selected="currentAs === 'green'">green</x-button>
          <x-button size="sm" @click="setAs('#000000')" :selected="currentAs === '#000000'">#000000</x-button>
          <x-group size="sm" class="margin-top--10">
            <x-form-input name="as-text" size="sm" @model="setAs($event)" as=text placeholder="CSS color"/>
          </x-group>
          <p class="margin-top--10">You are able to set the "as" attribute to any CSS colour: name, HEX value, RGB value, etc.</p>
        </div>
      </div>
    </x-card>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-tag<span v-if="currentAs !== defaults.as"> as="{{currentAs}}"</span>&gt;{{currentText}}&lt;/x-tag&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-tag',
  data () {
    return {
      defaults: {
        as: 'standard'
      },
      currentAs: 'standard',
      currentText: 'Sample tag'
    }
  },
  methods: {
    setAs: function (value) {
      if (!value) {
        this.currentAs = 'standard'
        return
      }
      this.currentAs = value
    }
  }
}
</script>
