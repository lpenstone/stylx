<template>
  <div>
    <h4>Form</h4>
    <div class="margin-top--30">
      A form contains fields that users provide inputs to.
    </div>
    <x-card size="sm" class="margin-top--20">
      <h5>Sample Form</h5>
      <div class="margin-top--20">
        <x-group size="md">
          <x-form name="sample" as="submit">
            <!-- radio buttons -->
            <x-form-group as="radio" name="fruits" label="What's your favourite fruit?" required>
              <x-form-group-option name="orange" label="Orange"/>
              <x-form-group-option name="grapes" label="Grapes"/>
              <x-form-group-option name="watermelon" label="Watermelon"/>
            </x-form-group>
            <!-- checkboxes -->
            <x-form-group as="checkbox" name="vegetables" label="What vegetables do you like?" required>
              <x-form-group-option name="cucumber" label="Cucumber"/>
              <x-form-group-option name="pepper" label="Sweet pepper"/>
              <x-form-group-option name="carrots" label="Carrots"/>
            </x-form-group>
            <!-- select dropdown -->
            <x-form-group as="select" name="diet" label="What's your diet?" required>
              <x-form-group-option name="vegetarian-vegan" label="Vegetarian or vegan"/>
              <x-form-group-option name="pescatarian" label="Pescatarian (veg and fish)"/>
              <x-form-group-option name="omnivore" label="Omnivore"/>
              <x-form-group-option name="other" label="Other"/>
            </x-form-group>
            <!-- text fields -->
            <x-form-input as="text" name="name" label="Name" required/>
            <x-form-input as="email" name="email" label="Email" required/>
            <!-- textarea (long message) -->
            <x-form-input as="textarea" name="message" label="Message"/>
          </x-form>
        </x-group>
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
