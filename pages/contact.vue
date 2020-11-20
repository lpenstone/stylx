<template>
  <div>
    <x-section as="hero">
      <x-content class="text-align-center">
        <h1>Let's chat</h1>
        <p>Communication welcome via <x-link href="linkedin" target="_blank">LinkedIn</x-link> or message form below</p>
      </x-content>
    </x-section>
    <x-section>
      <x-content>
        <x-element as="center" size="md">
          <div v-if="success" class="text-align-center">
            <div class="h2">👏</div>
            <h2 class="h3">Thanks!</h2>
            <p>I look forward to reading your message, and I'll reply as soon as I can.</p>
            <x-button @clicked="reset" class="margin--top-20">New message</x-button>
          </div>
          <x-card v-else as="shadow" size="lg">
            <h2 class="heading--title margin--bottom-20">Send a message</h2>
            <x-form name="contact" netlify action="/contact?notice=success">
              <x-form-input as="text" name="name" label="Name"/>
              <x-form-input as="email" name="email" label="Email"/>
              <x-form-input as="textarea" name="message" label="Message"/>
            </x-form>
          </x-card>
        </x-element>
      </x-content>
    </x-section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      success: this.$route.query.notice && this.$route.query.notice === 'success'
    }
  },
  mounted: function () {
    this.$router.push({name: 'contact'})
  },
  methods: {
    reset: function () {
      this.success = false
    }
  }
}
</script>
