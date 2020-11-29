<template>
  <div>
    <x-section>
      <x-content class="text-align--center">
        <x-grid cols="2">
          <x-grid-item>
            <x-icon-text as="left" iconAs="secondary" brand="vuejs">
              <strong>Use with Vue</strong>
              <p>Stylx integrates into Vue.js or Nuxt.js projects</p>
            </x-icon-text>
          </x-grid-item>
          <x-grid-item>
            <x-icon-text as="left" iconAs="secondary" brand="font-awesome-flag">
              <strong>Includes FontAwsome</strong>
              <p>Build your projects with access to 1000+ free icons</p>
            </x-icon-text>
          </x-grid-item>
        </x-grid>
      </x-content>
    </x-section>
  </div>
</template>

<script>
export default {
  name: 'demo',
  layout: 'minimal'
}
</script>

<style lang="stylus" scoped>

</style>

