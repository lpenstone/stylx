<template>
  <div>
    <h4>Form Group (select/dropdown, checkbox, radio)</h4>
    <div class="margin-top--30">
      <x-group size="md">
        <x-form-group :as="currentAs" name="demo-group" :label="currentLabel" :required="currentRequired">
          <x-form-group-option name="option-1" label="This is option 1"/>
          <x-form-group-option name="option-2" label="This is option 2"/>
          <x-form-group-option name="option-3" label="This is option 3"/>
          <x-form-group-option name="other" label="Other"/>
        </x-form-group>
      </x-group>
    </div>
    <x-card size="sm" class="margin-top--20">
      <h5>Attributes</h5>
      <div class="margin-top--20">
        <x-tag as="secondary">as</x-tag> or <x-tag as="secondary">type</x-tag>
        <div class="margin-top--10">
          <strong>default:</strong> <x-tag>radio</x-tag>
        </div>
        <div class="margin-top--10">
          <strong>values:</strong>
          <x-button size="sm" @click="setAs('radio')" :selected="currentAs === 'radio'">radio</x-button>
          <x-button size="sm" @click="setAs('checkbox')" :selected="currentAs === 'checkbox'">checkbox</x-button>
          <x-button size="sm" @click="setAs('select')" :selected="currentAs === 'select'">select</x-button>
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
            name="required-input-group"
            required>
            <x-form-group-option name="required-group" label="Required" checked/>
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
        &lt;x-form-group
        <span v-if="currentAs !== defaults.as">as="{{currentAs}}"</span>
        name="{{currentName}}"
        label="{{currentLabel}}"<span v-if="currentError !== defaults.error"> error="{{currentError}}"</span><span v-if="currentRequired"> required</span>/&gt;<br>
        &nbsp;&nbsp;&lt;x-form-group-option name="option-1" label="This is option 1"/&gt;<br>
        &nbsp;&nbsp;&lt;x-form-group-option name="option-2" label="This is option 2"/&gt;<br>
        &nbsp;&nbsp;&lt;x-form-group-option name="option-3" label="This is option 3"/&gt;<br>
        &nbsp;&nbsp;&lt;x-form-group-option name="other" label="Other"/&gt;<br>
        &lt;/x-form-group&gt;
      </x-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-form-group',
  data () {
    return {
      defaults: {
        as: 'radio',
        error: 'This is a required field'
      },
      currentAs: 'radio',
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
      this.currentRequired = array.indexOf('required-group') > -1
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
