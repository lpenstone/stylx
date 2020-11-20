<template>
  <div v-if="inputType === 'select'" class="select__wrap">
    <label :for="name" class="select__label">{{label}}</label>
    <select :id="name" class="select">
      <x-form-group-input name="default" label="Select" selected disabled />
      <slot></slot>
    </select>
  </div>
  <fieldset v-else class="group__fieldset">
    <legend class="group__legend">{{label}}</legend>
    <slot></slot>
  </fieldset>
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
    }
  },
  data () {
    return {}
  },
  computed: {
    inputType: function () {
      return this.type || this.as
    }
  }
}
</script>

<style scoped lang="stylus" src="./Form-Group.styl">