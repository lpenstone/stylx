<template>
  <form :ref="name" class="form" :class="{'form--errors': showErrors}" method="POST" @submit.prevent="handleSubmit($event)">
    <slot></slot>
    <x-button v-if="as === 'submit'" size="lg" type="submit" class="margin--center-block">Submit</x-button>
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
    }
  },
  data () {
    return {
      showErrors: false
    }
  },
  methods: {
    handleSubmit: function (e) {
      this.showErrors = true
      setTimeout(() => {
        let errorsArray = this.$refs[this.name].getElementsByClassName('error__wrap')
        if (errorsArray.length > 0) {
          return
        } else {
          e.target.submit()
        }
      }, 500)
    }
  }
}
</script>

<style scoped lang="stylus" src="./Form.styl">