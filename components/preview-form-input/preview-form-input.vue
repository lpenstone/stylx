<template>
  <div>
    <h4>Form Input (text, email, password, textarea)</h4>
    <div class="margin-top--30">
      <x-group size="md">
        <x-form-input
          :as="currentAs"
          name="demo-input"
          :label="currentLabel" 
          :required="currentRequired"/>
      </x-group>
    </div>
    <x-card size="sm" class="margin-top--20">
      <h5>Attributes</h5>
      <div class="margin-top--20">
        <x-tag as="secondary">as</x-tag> or <x-tag as="secondary">type</x-tag>
        <div class="margin-top--10">
          <strong>default:</strong> <x-tag>text</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values:</strong>
          <x-button size="sm" @click="setAs('text')" :selected="currentAs === 'text'">text</x-button>
          <x-button size="sm" @click="setAs('email')" :selected="currentAs === 'email'">email</x-button>
          <x-button size="sm" @click="setAs('password')" :selected="currentAs === 'password'">password</x-button>
          <x-button size="sm" @click="setAs('textarea')" :selected="currentAs === 'textarea'">textarea</x-button>
        </div>
      </div>
      <div class="margin-top--20">
        <x-tag as="secondary">label</x-tag> <em>*required</em>
        <x-group size="sm" class="margin-top--10">
          <x-form-input
            label="Add a label or description for your input"
            name="label-text"
            size="sm"
            @model="setLabel($event)"
            as="text"
            :placeholder="currentLabel"
            required/>
        </x-group>
      </div>
      <div class="margin-top--20">
        <x-tag as="secondary">name</x-tag> <em>*required</em>
        <x-group size="sm" class="margin-top--10">
          <x-form-input
            label="Choose a unique name for your input. No spaces, use hyphens."
            name="name-text"
            size="sm"
            @model="setName($event)"
            as="text"
            :placeholder="currentName"
            required/>
        </x-group>
      </div>
      <div class="margin-top--20">
        <x-tag as="secondary">required</x-tag>
        <x-group size="sm" class="margin-top--10">
          <x-form-group
            @model="setRequired($event)"
            as="checkbox"
            label="Do you want the input to require user response?"
            name="required-input"
            required>
            <x-form-group-option name="required" label="Required" checked/>
          </x-form-group>
        </x-group>
      </div>
      <div class="margin-top--20">
        <x-tag as="secondary">error</x-tag>
        <div class="margin-top--10">
          <p><strong>default:</strong> "This is a required field"</p>
        </div>
        <x-group size="sm" class="margin-top--10">
          <x-form-input
            as="text"
            name="name-text"
            label="Add a custom error message if the input is required and the field is left empty."
            size="sm"
            @model="setError($event)"
            required/>
        </x-group>
      </div>
    </x-card>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-form-input
        <span v-if="currentAs !== defaults.as">as="{{currentAs}}"</span>
        name="{{currentName}}"
        label="{{currentLabel}}"<span v-if="currentError !== defaults.error"> error="{{currentError}}"</span><span v-if="currentRequired"> required</span>/&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-form-input',
  data () {
    return {
      defaults: {
        as: 'text',
        error: 'This is a required field'
      },
      currentAs: 'text',
      currentName: 'unique-name',
      currentLabel: 'Label for the input',
      currentRequired: true,
      currentError: 'This is a required field'
    }
  },
  methods: {
    setAs: function (value) {
      this.currentAs = value
    },
    setName: function (value) {
      if (!value) {
        this.currentName = 'unique-name'
        return
      }
      this.currentName = value
    },
    setLabel: function (value) {
      if (!value) {
        this.currentLabel = 'Label for the input'
        return
      }
      this.currentLabel = value
    },
    setRequired: function (array) {
      this.currentRequired = array.indexOf('required') > -1
    },
    setError: function (value) {
      if (!value) {
        this.currentError = 'This is a required field'
        return
      }
      this.currentError = value
    }
  }
}
</script>
