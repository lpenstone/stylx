<template>
  <div class="input__wrap">
    <label v-if="label"
      class="input__label"
      :class="{'input__label--error': !valid}"
      :for="name">{{label}} <span v-if="!required" class="optional">(Optional)</span></label>
    <textarea v-if="inputType === 'textarea'"
      v-model="model"
      :class="['input__item', 'input__item--' + size, {'input__item--error': !valid}]"
      :name="name"
      :id="name"
      rows="5"
      style="resize: none"
      :placeholder="placeholder"></textarea>
    <input v-else
      v-model="model"
      :class="['input__item', 'input__item--' + size, {'input__item--error': !valid}]"
      :type="type || as"
      :name="name"
      :id="name"
      :placeholder="placeholder">
    <div v-if="!valid" class="error__wrap">
      <p>{{error}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    as: {
      type: String,
      default: 'text'
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md'
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
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
  computed: {
    inputType: function () {
      return this.type || this.as
    },
    valid: function () {
      if (this.required) return !!this.model
      return true
    }
  },
  methods: {
    clearInput: function () {
      this.model = ''
    },
    setInput: function (value) {
      this.model = value
    }
  },
  watch: {
    model: function (value) {
      this.$emit('model', value)
    }
  }
}
</script>

<style scoped lang="stylus" src="./Form-Input.styl">