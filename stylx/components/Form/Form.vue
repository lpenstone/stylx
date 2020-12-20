<template>
  <form :ref="name" class="form" :class="{'form--errors': showErrors}" method="POST" @submit.prevent="submit()">
    <slot></slot>
    <x-button v-if="as === 'submit'" type="submit" size="lg" class="margin--center-block">Submit</x-button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    as: {
      type: String,
      default: 'standard'
    },
    name: {
      type: String,
      required: true
    },
    prevent: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showErrors: false,
      formData: {}
    }
  },
  created: function () {
    this.$on('formData', function (config) {
      this.formData[config.name] = config.value
    })
  },
  methods: {
    submit: function () {
      this.showErrors = true
      setTimeout(() => {
        let errorsArray = this.$refs[this.name].getElementsByClassName('error__wrap')
        if (errorsArray.length > 0) {
          return
        } else {
          this.$emit('submitted', this.formData)
          if (!this.prevent) this.formSubmit()
        }
      }, 500)
    },
    formSubmit: function () {
      this.$refs[this.name].submit()
    }
  }
}
</script>

<style scoped lang="stylus" src="./Form.styl">