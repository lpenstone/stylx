<template>
  <div>
    <x-section as="hero" id="hero">
      <x-content class="text-align-center">
        <x-element as="center" size="md">
          <h1 class="margin--bottom-30">Welcome to Stylx</h1>
          <p class="heading--title">So you're interested in building a website fast that includes:</p>
          <x-carousel height="90" class="margin--top-40 margin--bottom-40">
            <x-carousel-item>
              <h2 class="h4 margin--bottom-20">Accessibility features</h2>
              <p>Keyboard and touch swipe capabilities, well-formatted forms, </p>
            </x-carousel-item>
            <x-carousel-item>
              <h2 class="h4 margin--bottom-20">Dark mode capability</h2>
              <p>Components are designed and built with light and dark mode versions.</p>
            </x-carousel-item>
            <x-carousel-item>
              <h2 class="h4 margin--bottom-20">Responsive design</h2>
              <p>All elements are built to suit and adjust to any screen size.</p>
            </x-carousel-item>
            <x-carousel-item>
              <h2 class="h4 margin--bottom-20">Branding customizations</h2>
              <p>Adjust the look and feel of your website with your brand colors and style preferences.</p>
            </x-carousel-item>
            <x-carousel-item>
              <h2 class="h4 margin--bottom-20">Easy to use syntax</h2>
              <p>If you know HTML basics, you'll thrive using Stylx.</p>
            </x-carousel-item>
          </x-carousel>
          <div class="margin--top-20">
            <x-link as="hollow" size="lg" :to="{name: 'docs'}">View components</x-link>
            <x-link as="standard" size="lg" href="github.com">Get started</x-link>
          </div>
        </x-element>
      </x-content>
    </x-section>
    <x-section>
      <x-content class="text-align-center">
        
      </x-content>
    </x-section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
</style>
