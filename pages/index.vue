<template>
  <div>
    <x-section as="hero" id="hero">
      <x-content class="text-align--center">
        <x-element as="center" size="md">
          <h1 class="margin-bottom--30">Stylx UI framework</h1>
          <p class="heading--title">The essential development tool for...</p>
          <x-element as="center" size="sm">
            <x-carousel as="cycle-2500" class="margin-bottom--70">
              <x-carousel-item>
                <h2 class="heading--title">building websites quickly</h2>
              </x-carousel-item>
              <x-carousel-item>
                <h2 class="heading--title">accessibile components</h2>
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
          </x-element>
          <div class="margin-top--20">
            <x-link as="hollow" size="lg" :to="{name: 'docs'}">View components</x-link>
            <x-link as="standard" size="lg" brand="github" href="github.com">Get started</x-link>
          </div>
        </x-element>
      </x-content>
    </x-section>
    <x-section>
      <x-content class="text-align--center">
        
      </x-content>
    </x-section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
</style>

