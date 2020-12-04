<template>
  <option v-if="inputType === 'select'" :value="name">{{label}}</option>
  <div v-else class="input__wrap">
    <label class="input__label" :for="name">{{label}}
      <input class="input__item"
        v-model="model"
        :type="inputType"
        :name="groupName"
        :value="name"
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
    return {
      model: ''
    }
  },
  computed: {
    inputType: function () {
      return this.$parent._props.type || this.$parent._props.as
    },
    groupName: function () {
      return this.$parent._props.name
    }
  },
  watch: {
    model: function (value) {
      if (this.inputType === 'checkbox') {
        this.$parent.$emit('modelCheckBox', {name: this.name, value: value})
      } else {
        this.$parent.$emit('model', value)
      }
    }
  }
}
</script>

<style scoped lang="stylus" src="./Form-Group-Option.styl">