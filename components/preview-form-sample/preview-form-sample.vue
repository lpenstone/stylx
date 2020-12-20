<template>
  <div>
    <h4>Sample Form</h4>
    <x-card size="sm" class="margin-top--20">
      <div>
        <x-group size="md">
          <x-modal size="sm" name="formModal" ref="formModal">
            <p class="h2">Nice! 😎</p>
            <p>Your demo form has been successfully completed!</p>
          </x-modal>
          <x-form as="submit" name="sample" @submitted="handleSubmit()" prevent>
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
            <!-- <x-button type="submit" size="lg" class="margin--center-block">Submit</x-button> -->
          </x-form>
        </x-group>
      </div>
    </x-card>
  </div>
</template>

<script>
export default {
  name: 'preview-form-sample',
  data () {
    return {
      defaults: {
        as: 'standard',
        size: 'md'
      },
      currentAs: 'standard',
      currentSize: 'md',
      submitted: false
    }
  },
  methods: {
    setAs: function (value) {
      this.currentAs = value
    },
    setSize: function (value) {
      this.currentSize = value
    },
    handleSubmit: function () {
      this.$refs.formModal.openModal('formModal')
    }
  }
}
</script>
