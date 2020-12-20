<template>
  <div>
    <div v-if="inputType === 'select'" class="select__wrap">
      <label :for="name" class="select__label" :class="{'select__label--error': !valid}">{{label}} <span v-if="!required" class="optional">(Optional)</span></label>
      <div class="select-caret__wrap">
        <select
          :id="name"
          :name="name"
          v-model="model"
          class="select"
          :class="{'select--error': !valid}">
          <x-form-group-option name="default" label="Select" selected disabled />
          <slot></slot>
        </select>
      </div>
      <div v-if="!valid" class="error__wrap">
        <p>{{error}}</p>
      </div>
    </div>
    <fieldset v-else class="group__fieldset">
      <legend class="group__legend" :class="{'group__legend--error': !valid}">{{label}} <span v-if="!required" class="optional">(Optional)</span></legend>
      <div>
        <slot></slot>
      </div>
      <div v-if="!valid" class="error__wrap">
        <p>{{error}}</p>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'Form-Group',
  props: {
    as: {
      type: String,
      default: 'radio'
    },
    type: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: 'This is a required field'
    }
  },
  data () {
    return {
      model: ''
    }
  },
  created: function () {
    if (this.inputType === 'checkbox') {
      this.setCheckbox()
    } else {
      this.$on('model', function (value) {
        this.model = value
      })
    }
  },
  computed: {
    inputType: function () {
      return this.type || this.as
    },
    valid: function () {
      if (this.required) {
        if (this.inputType === 'checkbox') {
          return !!this.model[0]
        } else {
          return !!this.model
        }
      }
      return true
    }
  },
  methods: {
    setCheckbox: function () {
      this.model = []
      this.$on('modelCheckBox', function (config) {
        if (config.value) {
          this.model.push(config.name)
        } else {
          let i = this.model.indexOf(config.name)
          this.model.splice(i, 1)
        }
      })
    }
  },
  watch: {
    model: function (value) {
      this.$emit('model', value)
      this.$parent.$emit('formData', {name: this.name, value: value})
    },
    inputType: function (value) {
      if (value === 'checkbox') this.setCheckbox()
    }
  }
}
</script>

<style scoped lang="stylus" src="./Form-Group.styl">