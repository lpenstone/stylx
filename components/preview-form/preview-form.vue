<template>
  <div>
    <h4>Form</h4>
    <div class="margin-top--30">
      <p>A form contains fields where users can input information.</p>
      <p>Stylx forms include validation and error messages for the presence of required fields.</p>
      <x-link as="link-alt" href="#sample-form">View a demo</x-link>
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
          <x-button size="sm" @click="setAs('submit')" :selected="currentAs === 'submit'">submit</x-button>
        <p v-if="currentAs === 'submit'" class="margin-top--10">When set to "submit", your form will automatically have a submit button included in the form.</p>
        <div v-else class="margin-top--10">
          <p>When set to "standard", you will need to add a submit button to your form manually, such as:</p>
          <x-code class="margin-top--10">
            &lt;x-button type="submit" size="lg"&gt;Submit&lt;/x-button&gt;
          </x-code>
        </div>
        </div>
      </div>
      <div class="margin-top--20">
        <x-tag as="secondary">name</x-tag> <em>*required</em>
        <x-group size="sm" class="margin-top--10">
          <x-form-input
            label="Choose a unique name for your form. No spaces, use hyphens."
            name="name-text"
            size="sm"
            @model="setName($event)"
            as="text"
            :placeholder="currentName"
            required/>
        </x-group>
      </div>
      <div class="margin-top--20">
        <x-tag as="secondary">@submitted</x-tag> &amp; <x-tag as="secondary">prevent</x-tag>
        <x-group size="sm" class="margin-top--10">
          <x-form-group
            @model="setManual($event)"
            as="checkbox"
            label="If you want to manually handle the form submission with javascript, you can write your own function for when the form submits."
            name="manual-input"
            required>
            <x-form-group-option name="manual" label="handle form submission manually"/>
          </x-form-group>
        </x-group>
      </div>
    </x-card>
    <div class="margin-top--20">
      <h5>Code</h5>
      <x-code class="margin-top--10">
        &lt;x-form
        <span v-if="currentAs !== defaults.as">as="{{currentAs}}"</span>
        name="{{currentName}}"<span v-if="currentManual"> @submitted="yourMethod($event)" prevent</span>&gt;<br>
        &nbsp;&nbsp;&lt;!-- Your form inputs --&gt;<br>
        <span v-if="currentAs === 'standard'">
          &nbsp;&nbsp;&lt;x-button type="submit" size="lg"&gt;Submit&lt;/x-button&gt;<br>
        </span>
        &lt;/x-form&gt;
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
        as: 'standard'
      },
      currentAs: 'standard',
      currentName: 'unique-name',
      currentManual: false,
      submitted: false
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
    setManual: function (array) {
      this.currentManual = array.indexOf('manual') > -1
    },
    handleSubmit: function () {
      this.$refs.formModal.openModal('formModal')
    }
  }
}
</script>
