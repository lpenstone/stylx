<template>
  <div>
    <x-section as="hero" id="hero">
      <x-content class="text-align--center">
        <x-group as="center" size="md">
          <h1 class="margin-bottom--30">Stylx UI framework</h1>
          <p class="heading--title">The essential development tool for...</p>
          <x-group as="center" size="sm">
            <x-carousel as="cycle-2500" class="margin-bottom--70">
              <x-carousel-item>
                <h2 class="heading--title">building websites quickly</h2>
              </x-carousel-item>
              <x-carousel-item>
                <h2 class="heading--title">accessible components</h2>
              </x-carousel-item>
              <x-carousel-item>
                <h2 class="heading--title">dark mode capability</h2>
              </x-carousel-item>
              <x-carousel-item>
                <h2 class="heading--title">responsive design</h2>
              </x-carousel-item>
              <x-carousel-item>
                <h2 class="heading--title">branding customizations</h2>
              </x-carousel-item>
            </x-carousel>
          </x-group>
          <div class="margin-top--20">
            <x-link as="hollow" size="lg" :to="{name: 'library'}" class="margin-left--5 margin-right--5 margin-bottom-10">
              View library
            </x-link>
            <x-link as="standard" size="lg" :to="{name: 'docs'}" class="margin-left--5 margin-right--5 margin-bottom-10">
              Get started
            </x-link>
          </div>
        </x-group>
      </x-content>
    </x-section>
    <x-section>
      <x-content class="text-align--center">
        <x-grid cols="3">
          <x-grid-item>
            <x-icon-text as="center" iconAs="brand" brand="vuejs">
              <strong>Use with Vue</strong>
              <p>Stylx integrates into Vue.js or Nuxt.js projects</p>
            </x-icon-text>
          </x-grid-item>
          <x-grid-item>
            <x-icon-text as="center" iconAs="brand" brand="font-awesome-flag">
              <strong>Includes FontAwsome</strong>
              <p>Build your projects with access to 1000+ free icons</p>
            </x-icon-text>
          </x-grid-item>
          <x-grid-item>
            <x-icon-text as="center" iconAs="brand" icon="laptop-code">
              <strong>Preview your elements</strong>
              <p>Style and preview your elements, and copy the generated code</p>
            </x-icon-text>
          </x-grid-item>
        </x-grid>
      </x-content>
    </x-section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
</style>

