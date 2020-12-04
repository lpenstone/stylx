<template>
  <div>
    <div v-if="inputType === 'select'" class="select__wrap">
      <label :for="name" class="select__label" :class="{'select__label--error': !valid}">{{label}}</label>
      <select
        :id="name"
        :name="name"
        v-model="model"
        class="select">
        <x-form-group-option name="default" label="Select" selected disabled />
        <slot></slot>
      </select>
    </div>
    <fieldset v-else class="group__fieldset">
      <legend class="group__legend" :class="{'group__legend--error': !valid}">{{label}}</legend>
      <slot></slot>
    </fieldset>
    <div v-if="!valid" class="error__wrap">
      <p>{{error}}</p>
    </div>
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
  mounted: function () {
    this.$on('model', function (value) {
      this.model = value
    })

    if (this.inputType === 'checkbox') this.model = []
    this.$on('modelCheckBox', function (config) {
      if (config.value) {
        this.model.push(config.name)
      } else {
        let i = this.model.indexOf(config.name)
        this.model.splice(i, 1)
      }
    })
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
  watch: {
    model: function (value) {
      this.$emit('model', value)
      console.log(value)
    }
  }
}
</script>

<style scoped lang="stylus" src="./Form-Group.styl">