<template>
  <option v-if="inputType === 'select'" :value="name">{{label}}</option>
  <div v-else class="input__wrap">
    <label class="input__label" :for="name">{{label}}
      <input class="input__item"
        :type="inputType"
        :name="groupName"
        :id="name">
      <span class="input__selector"
        :class="'input__selector--' + inputType"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Form',
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
      type: String
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
      return this.$parent._props.type || this.$parent._props.as
    },
    groupName: function () {
      return this.$parent._props.name
    }
  }
}
</script>

<style scoped lang="stylus" src="./Form-Group-Input.styl">