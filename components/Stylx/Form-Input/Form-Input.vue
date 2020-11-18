<template>
  <div class="input__wrap">
    <label class="input__label" :for="name">{{label}}</label>
    <textarea v-if="inputType === 'textarea'"
      class="input__item"
      :name="name"
      :id="name"
      rows="5"
      style="resize: none"
      :placeholder="placeholder"></textarea>
    <input v-else
      class="input__item"
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
    return {}
  },
  computed: {
    inputType: function () {
      return this.type || this.as
    // },
    // isInput: function () {
    //   return ['text', 'email', 'password'].indexOf(this.inputType) > -1
    }
  }
}
</script>

<style scoped lang="stylus" src="./Form-Input.styl">