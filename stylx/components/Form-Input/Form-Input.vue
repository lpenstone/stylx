<template>
  <div class="input__wrap">
    <label v-if="label" class="input__label" :for="name">{{label}}</label>
    <textarea v-if="inputType === 'textarea'"
      v-model="model"
      :class="['input__item', 'input__item--' + size]"
      :name="name"
      :id="name"
      rows="5"
      style="resize: none"
      :placeholder="placeholder"></textarea>
    <input v-else
      v-model="model"
      :class="['input__item', 'input__item--' + size]"
      :type="type || as"
      :name="name"
      :id="name"
      :placeholder="placeholder">
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